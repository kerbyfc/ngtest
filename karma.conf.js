'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isDebug = process.env.DEBUG || false;
const RUN_ONCE = process.env.BDD || isDebug ? false : true;
const browsers = [isDebug ? 'Chrome' : 'PhantomJS'];

const options = {
    basePath: '',
    browsers: browsers,
    frameworks: ['jasmine'],
    autoWatch: true,
    singleRun: RUN_ONCE,
    files: [
        // es6-shim is currently needed for phantomjs
        './node_modules/es6-shim/es6-shim.js',
        './tests/specs.bundle.js',
        './src/core/**/*.spec.js',
        './src/components/**/*.spec.js'
    ],
    preprocessors: {
        './tests/specs.bundle.js': ['webpack', 'sourcemap'],
        './src/core/**/*.spec.js': ['webpack', 'sourcemap'],
        './src/components/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: {
        devtool: 'inline-source-map',
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loaders: ['babel']
            }, {
                test: /\.html$/,
                loader: 'ngtemplate!html',
                exclude: /(index)/
            }, {
                test: /\.json$/,
                loader: 'json',
                exclude: /(index)/
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!' +
                    'less?sourceMap')
            }]
        },
        plugins: [
            new ExtractTextPlugin('[name].[chunkhash].style.css')
        ],
        resolve: {}
    },
    webpackMiddleware: {
        noInfo: true
    },
    plugins: [
        require('karma-webpack'),
        require('karma-sourcemap-loader'),
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-mocha-reporter',
        'karma-clear-screen-reporter'
    ],
    reporters: [
        'mocha',
        'clear-screen'
    ],
};

module.exports = function (config) {
    config.set(options);
};

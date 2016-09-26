const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const getPath = (pathToFile) => path.resolve(__dirname, pathToFile);

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            getPath('./src/app.js'),
            getPath('./src/config/dev.config.js')
        ],
        vendors: [
            'angular',
            'angular-ui-router',
            'angular-animate',
            'angular-ui-bootstrap',
            'angular-local-storage'
        ]
    },
    output: {
        path: getPath('./dist'),
        filename: '[name].[hash].bundle.js',
        sourceMapFilename: '[name].[hash].bundle.map'
    },

    resolve: {
        modulesDirectories: [
            'node_modules', 'src/component', 'src/core', 'src/css'
        ],
        extensions: ['', '.js', 'less', 'html']
    },
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
            loader: ExtractTextPlugin.extract('css?sourceMap!' + 'less?sourceMap')
        },
            // FONTS
            {
                test: /\.woff$/,
                loader: 'url?limit=100000&name=./fonts/[name]/[hash].[ext]'
            }, {
                test: /\.eot$/,
                loader: 'file'
            }, {
                test: /\.svg$/,
                loader: 'url?limit=100000&name=./fonts/[name]/[hash].[ext]'
            },
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file'
            }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            fileName: 'vendors.[hash].js',
            minChunks: Infinity
        }),
        new webpack.optimize.AggressiveMergingPlugin({}),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new ExtractTextPlugin('[name].[hash].style.css'),
        new HtmlWebpackPlugin({
            template: 'html!./src/index.html'
        }),

        /**
         * For test task purposes only
         */
        new CopyWebpackPlugin([{
            from: 'tests/mocks',
            to: 'assets'
        }])
    ]
};

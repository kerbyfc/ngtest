import './css/style.less';
require('font-awesome-webpack');

/**
 * Angular imports
 */
import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import AngularBootstrap from 'angular-ui-bootstrap';

/**
 * Core imports
 */
import AppCore from './core';
import {AppComponent} from './app.component';

/**
 * Component imports
 */
import Home from './components/home';
import Navbar from './components/navbar';
import Book from './components/book';
import Search from './components/search';
import P404 from './components/p404';

angular.module('app', [
    // framework wide components
    AngularUiRouter,
    AngularAnimate,
    AngularBootstrap,

    // services
    'LocalStorageModule',
    AppCore,

    // ui-components
    Home,
    Book,
    Navbar,
    Search,
    P404
])
    .config(config)
    .component(AppComponent.selector, AppComponent);

/* @ngInject */
function config($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    localStorageServiceProvider.setPrefix('app');

    $stateProvider
        .state('home', {
            url: '',
            component: 'home'
        })
        .state('book', {
            url: '/book/:title',
            component: 'book'
        })
        .state('search', {
            url: '/search/:q',
            component: 'search',
            params: {
                q: {
                    value: "",
                    dynamic: true
                }
            }
        })
        .state('404', {
            url: '/404',
            component: 'p404'
        });

    $urlRouterProvider.otherwise('/404');
}

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});

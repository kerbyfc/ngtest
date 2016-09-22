import './css/style.less';
require('font-awesome-webpack');

import angular from 'angular';
// import Angular2To1 from 'angular2to1';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import AngularSanitize from 'angular-sanitize';
import AngularBootstrap from 'angular-ui-bootstrap';
/*eslint-disable */
import LocalStorageModule from 'angular-local-storage';
/*eslint-enable */
import AppCore from './core';
import { AppComponent } from './app.component';

import Home from './components/home';
import Navbar from './components/navbar';
import Book from './components/book';
import Search from './components/search';

import {APP_NAME} from './vars';

angular.module(APP_NAME, [
  // framework wide components
  AngularUiRouter,
  AngularAnimate,
  AngularSanitize,
  AngularBootstrap,

  // services
  'LocalStorageModule',
  AppCore,

  // ui-components
  Home,
  Book,
  Navbar,
  Search
])
.config(config)
.component(AppComponent.selector, AppComponent);

/* @ngInject */
function config ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

  localStorageServiceProvider.setPrefix(APP_NAME);

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('book', {
      url: '/book/:title',
      component: 'book'
    })
    .state('search', {
      url: '/search/:q',
      component: 'search'
    });;

  $urlRouterProvider.otherwise('/');
}

angular.element(document).ready(() => {
  angular.bootstrap(document, [APP_NAME]);
});

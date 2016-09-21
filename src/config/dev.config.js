import angular from 'angular';
import {APP_NAME} from '../app.js';

// TODO - make app name a nodejs ENV variable
angular.module(APP_NAME)
    .config(config);

/* @ngInject */
function config ($compileProvider) {

}

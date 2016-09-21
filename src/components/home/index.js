import angular from 'angular';
import {HomeComponent} from './home.component';
import AppCore from '../../core';

export * from './home.component';

export default angular.module('home', [AppCore])
    .config(config)
    .component(HomeComponent.selector, HomeComponent)
    .name;

/* @ngInject */
function config() {

}

import angular from 'angular';
import {NavbarComponent} from './navbar.component';

export * from './navbar.component';

export default angular.module('navbar', [])
    .config(config)
    .component(NavbarComponent.selector, NavbarComponent)
    .name;

/* @ngInject */
function config() {

}

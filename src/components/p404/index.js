import angular from 'angular';
import {P404Component} from './p404.component';

export * from './p404.component';

export default angular.module('p404', [])
    .config(config)
    .component(P404Component.selector, P404Component)
    .name;

/* @ngInject */
function config() {

}

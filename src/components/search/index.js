import angular from 'angular';
import {SearchComponent} from './search.component';

export * from './search.component';

export default angular.module('search', [])
    .config(config)
    .component(SearchComponent.selector, SearchComponent)
    .name;

/* @ngInject */
function config() {

}

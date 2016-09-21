import angular from 'angular';
import {loaderOverlay} from './loader-overlay.component';

export default angular.module('loaderOverlay', [])
    .component(loaderOverlay.selector, loaderOverlay)
    .name;


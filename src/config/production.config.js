import angular from 'angular';

angular.module('app')
    .config(config);

/* @ngInject */
function config($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}

import angular from 'angular';
import {APP_NAME} from '../vars';

angular.module(APP_NAME)
    .config(config);

/* @ngInject */
function config ($compileProvider) {
	$compileProvider.debugInfoEnabled(false);
}

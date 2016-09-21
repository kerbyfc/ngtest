import angular from 'angular';
import { BookComponent } from './book.component';

export * from './book.component';

export default angular.module('book', [

])
	.config(config)
	.component(BookComponent.selector, BookComponent)
.name;
/* @ngInject */
function config () {

}

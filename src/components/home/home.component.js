import './home.less';
import template from './home.html';

export let HomeComponent = {
    templateUrl: template,
    selector: 'home',
    bindings: {},
    /* @ngInject */
    controller: class HomeCtrl {
        /* @ngInject */
        constructor($scope, $state, BooksService) {
            BooksService.fetch();
            $scope.title = 'Best 10 Books & Authors';
        }
    }
};

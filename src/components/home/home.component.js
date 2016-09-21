import './home.less';
import template from './home.html';

export let HomeComponent = {
    templateUrl: template,
    selector: 'home',
    bindings: {},
    controllerAs: 'ctrl',

    controller: class HomeCtrl {

        /* @ngInject */
        constructor($scope, BooksService, $timeout) {
            $scope.title = 'Best 10 Books & Authors';
            $scope.loading = true;
            $scope.books = [];

            BooksService.fetch()
                .then((books) => {
                    $scope.books = books;
                })
                .finally(() => {
                    $scope.loading = false;
                });
        }
    }
};

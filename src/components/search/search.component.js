import './search.less';
import template from './search.html';

export let SearchComponent = {
    templateUrl: template,
    selector: 'search',
    bindings: {},

    controller: class SearchCtrl {

        /* @ngInject */
        constructor($scope, $state, BooksService) {
            $scope.loading = true;
            $scope.books = [];
            $scope.q = $state.current.q || '';

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

import './search.less';
import template from './search.html';

export let SearchComponent = {
    templateUrl: template,
    selector: 'search',
    bindings: {},

    controller: class SearchCtrl {

        /* @ngInject */
        constructor($scope, $state, BooksService) {
            const search = angular.element(document.querySelector('[data-search-input]'));

            $scope.loading = true;
            $scope.books = [];
            $scope.q = $state.current.q || '';
            $scope.sorting = 'rating';

            $scope.sorter = (item) => {
                return item[$scope.sorting];
            };

            BooksService.fetch()
                .then((books) => {
                    $scope.books = books;
                })
                .finally(() => {
                    $scope.loading = false;
                    search.focus()
                });
        }
    }
};

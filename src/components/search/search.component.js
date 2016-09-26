import './search.less';
import template from './search.html';

export let SearchComponent = {
    templateUrl: template,
    selector: 'search',
    bindings: {},

    controller: class SearchCtrl {

        /* @ngInject */
        constructor($scope, $state, $timeout, BooksService) {
            this.$timeout = $timeout;

            $scope.loading = true;
            $scope.books = [];
            $scope.q = $state.params.q;
            $scope.sorting = 'rating';

            $scope.sorter = this.sort.bind($scope);
            $scope.filterByTitle = this.filterByTitle.bind($scope);

            $scope.$watch('q', (value) => {
                $state.go('search', {q: value}, {reloadOnSearch: false});
            });

            BooksService.fetch()
                .then((books) => {
                    $scope.books = books;
                })
                .finally(() => {
                    $scope.loading = false;
                    this.focusInput();
                });
        }

        focusInput() {
            const input = angular.element(document.querySelector('[data-search-input]'))[0];
            if (input) {
                this.$timeout(() => {
                    input.focus();
                });
            }
        }

        // $scope binded
        filterByTitle(item) {
            return item.title.toLowerCase().match(this.q.toLocaleLowerCase());
        }

        // $scope binded
        sort(item) {
            if (this.sorting === 'rating') {
                return -item.rating;
            }
            return item[this.sorting];
        }
    }
};

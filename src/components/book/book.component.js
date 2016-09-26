import './book.less';
import template from './book.html';

export let BookComponent = {
    templateUrl: template,
    selector: 'book',
    bindings: {},

    controller: class BookCtrl {
        /* @ngInject */
        constructor($scope, $state, BooksService) {
            $scope.title = decodeURIComponent($state.params.title);
            $scope.loading = true;
            $scope.book = null;

            this.$state = $state;
            this.$scope = $scope;

            BooksService.fetch()
                .then((books) => {
                    this.findBook(books);
                })
                .finally(() => {
                    $scope.loading = false;
                });
        }

        findBook(books) {
            for (let i = 0; i < books.length; i++) {
                if (books[i].title === this.$scope.title) {
                    this.$scope.book = books[i];
                    return;
                }
            }
            this.$state.go('404');
        }
    }
};

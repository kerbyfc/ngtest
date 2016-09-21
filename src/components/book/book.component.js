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

            BooksService.fetch()
                .then((books) => {
                    for (let i = 0; i < books.length; i++) {
                        if (books[i].title === $scope.title) {
                            $scope.book = books[i];
                            break;
                        }
                    }
                })
                .finally(() => {
                    $scope.loading = false;
                });
        }
    }
};

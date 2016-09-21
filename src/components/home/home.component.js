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

            $scope.bookRatingOrder = (book) => {
                return book.critic_reviews.reduce((sum, review) => {
                    return sum + review.star_rating;
                }, 0) / book.critic_reviews.length ;
            };

            BooksService.fetch()
                .then((response) => {
                    $scope.books = response.data;
                })
                .finally(() => {
                    $scope.loading = false;
                });
        }
    }
};

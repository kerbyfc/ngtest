/* @ngInject */
export default function BookService($http, $q) {
    /**
     * For test purposes only
     */
    const url = '/assets/books.mock.json';

    /**
     * Array of book objects (cache)
     * @type {Array<Object>}
     */
    let books = null;

    /**
     * Get from cache
     * @type {Array<Object>}
     */
    function getFromCache() {
        const defer = $q.defer();
        defer.resolve(books);
        return defer.promise;
    }

    function calcRating(book) {
        const sum = book.critic_reviews.reduce((sum, review) => {
            return sum + review.star_rating;
        }, 0);
        return (sum / book.critic_reviews.length).toFixed(1);
    }

    function parseBooks(books) {
        return books.map((book) => {
            /**
             * Set default book img
             */
            if (!book.img) {
                book.img = 'https://images.freecreatives.com/wp-content/uploads/2015/05/3d-book-smart-object.png';
            }

            /**
             * Calculate rating
             */
            book.rating = book.critic_reviews.length ? calcRating(book) : 0..toFixed(1);

            return book;
        });
    }

    /**
     * Fetch all books
     */
    function fetch(clearCache = false) {
        if (books && !clearCache) {
            return getFromCache();
        }

        return $http.get(url).then((response) => {
            /**
             * Cache books
             */
            books = parseBooks(response.data);
            return books;
        });
    }

    return {
        fetch
    };
}

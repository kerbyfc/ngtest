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
                book.img = 'http://2.bp.blogspot.com/-d9XGJtm2Nqg/VlSlvaE3iNI/AAAAAAAAAes/us4XZUA4_wg/s1600/mystery-book-300x225.jpg';
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

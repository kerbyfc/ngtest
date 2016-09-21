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

    /**
     * Set default book img
     */
    function parseBooks(books) {
        return books.map((book) => {
            if (!book.img) {
                book.img = 'https://images.freecreatives.com/wp-content/uploads/2015/05/3d-book-smart-object.png';
            }
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

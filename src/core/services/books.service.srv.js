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
     * Fetch all books
     */
    function fetch(clearCache = false) {
        if (books && !clearCache) {
            return getFromCache();
        }

        return $http.get(url).then((response) => {
            books = response.data; // cache
            return books;
        });
    }

    return {
        fetch
    };
}

/* @ngInject */
export default function BookService($http) {

    /**
     * For test purposes only
     */
    const url = '/assets/books.mock.json';

    /**
     * Fetch all books
     */
    function fetch() {
        return $http.get(url);
    }

    return {
        fetch
    };
}

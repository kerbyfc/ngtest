/* @ngInject */
export default function SomeService($http) {
    const url = '/books';

    const exports = {
        fetch
    };

    return exports;

    /**
     * Fetch all books
     */
    function fetch() {
        return $http.get(url);
    }
}

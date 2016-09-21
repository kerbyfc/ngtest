import angular from 'angular';
// uncomment if you need a local storage solution
// import LocalStorageModule from 'angular-local-storage';
import BooksService from './books.service.srv.js';

export default angular
    .module('core.services', [
        // 'LocalStorageModule'
    ])
    .config(['$httpProvider', function ($httpProvider) {

        /**
         * For test purposes only.
         */
        $httpProvider.interceptors.push([
            '$q', '$timeout',
            function ($q, $timeout) {

                var delay = Math.random();

                return {
                    'response': function(response) {
                        var defer = $q.defer();

                        if (typeof(response.data) !== 'object') {
                            return response;
                        }

                        $timeout(function () {
                            defer.resolve(response);
                        }, delay * 3000);

                        return defer.promise;
                    }
                };
            }
        ]);

    }])
    .factory('BooksService', BooksService)
;

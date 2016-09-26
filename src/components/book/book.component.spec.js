'use strict';
import bookModule, {BookComponent} from './index.js';
import BooksMock from '../../../tests/mocks/books.mock.json';

describe('book Component', () => {
    var ctrl, $scope, fetchCalls;

    beforeEach(window.module(bookModule));

    beforeEach(window.inject(($componentController, $rootScope, $q) => {
        $scope = $rootScope.$new();
        fetchCalls = 0;
        ctrl = $componentController(BookComponent.selector, {
            $state: {
                params: {
                    title: 'A%20Mind%20Awake'
                }
            },
            BooksService: {
                fetch() {
                    fetchCalls++;
                    return $q((resolve) => {
                        resolve(BooksMock);
                    });
                }
            },
            $scope
        });
    }));

    it('should fetch books', (next) => {
        setTimeout(() => {
            expect(fetchCalls).toEqual(1);
            next();
        });
    });

});

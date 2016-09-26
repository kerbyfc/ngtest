'use strict';
import searchModule, {SearchComponent} from './index.js';

describe('search Component', () => {
    var ctrl, $scope, fetchCalls;

    beforeEach(window.module(searchModule));

    beforeEach(window.inject(($componentController, $rootScope, $q) => {
        $scope = $rootScope.$new();
        fetchCalls = 0;
        ctrl = $componentController(SearchComponent.selector, {
            $state: {
                params: {
                    q: 'query'
                }
            },
            BooksService: {
                fetch() {
                    fetchCalls++;
                    return $q((resolve) => {
                        resolve({});
                    });
                }
            },
            $scope
        });
    }));

    it('should fetch books', () => {
        expect(fetchCalls).toEqual(1);
    });
});

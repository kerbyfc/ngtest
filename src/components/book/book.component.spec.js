'use strict';
import bookModule, {BookComponent} from './index.js';

describe('book Component', () => {
    var ctrl, $scope, fetchCalls;

    beforeEach(window.module(bookModule));

    beforeEach(window.inject(($componentController, $rootScope, $q) => {
        $scope = $rootScope.$new();
        fetchCalls = 0;
        ctrl = $componentController(BookComponent.selector, {
            $state: {
                params: {
                    title: 'title'
                }
            },
            BooksService: {
                fetch() {
                    fetchCalls++;
                    return $q((resolve) => {
                        resolve([
                            {title: 'title'}
                        ]);
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

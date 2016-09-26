'use strict';
import HomeModule, {HomeComponent} from './index.js';
// if a mock json object is needed for tests
// import HomeMock from '../../../tests/mocks/home.mock.json';

describe('Home Component', () => {
    var ctrl, $scope;

    beforeEach(window.module(HomeModule));

    beforeEach(window.inject(($componentController, $rootScope) => {
        $scope = $rootScope.$new();
        ctrl = $componentController(HomeComponent.selector, {
            $state: {},
            $scope
        });
    }));

    it('should have a title', () => {
        const expected = 'Best 10 Books & Authors';
        expect($scope.title).toMatch(expected);
    });
});

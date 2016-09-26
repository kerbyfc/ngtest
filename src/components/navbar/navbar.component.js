import './navbar.less';
import template from './navbar.html';

export let NavbarComponent = {
    templateUrl: template,
    selector: 'navbar',
    bindings: {},

    controller: class NavbarCtrl {
        /* @ngInject */
        constructor($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }
    }
};

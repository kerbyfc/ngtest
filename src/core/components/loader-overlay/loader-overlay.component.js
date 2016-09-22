import './loader-overlay.less';
import template from './loader-overlay.html';

export let loaderOverlay = {
    templateUrl: template,
    selector: 'loaderOverlay',
    bindings: {
        loading: '@'
    },
    controllerAs: 'ctrl',
    controller: class LoaderOverlayCtrl {
        /* @ngInject */
        constructor($scope, $interval) {
            let cur = 0;
            const sprites = ['🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚'];
            $scope.clock = sprites[cur];

            /**
             * Animation
             */
            $interval(() => {
                console.log('here');
                if (cur === sprites.length - 1) {
                    cur = -1;
                }
                $scope.clock = sprites[++cur];
            }, 50);
        }
    }
};

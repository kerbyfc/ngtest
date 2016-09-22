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
        constructor($scope, $timeout) {
            this.i = 0;
            this.sprites = ['🕛', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚'];
            this.scope = $scope;
            this.timeout = $timeout;

            $scope.clock = this.sprites[this.i];

            this.$onChanges = () => {
                if (this.isActive()) {
                    this.animate();
                }
            };

            if (this.isActive()) {
                this.animate();
            }
        }

        isActive() {
            return this.loading === 'true';
        }

        animate() {
            /**
             * Animation
             */
            this.timeout(() => {
                if (this.i === this.sprites.length - 1) {
                    this.i = -1;
                }
                this.scope.clock = this.sprites[++this.i];
                if (this.isActive()) {
                    this.animate();
                }
            }, 50);
        }
    }
};

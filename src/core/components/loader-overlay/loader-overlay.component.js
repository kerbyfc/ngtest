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
        constructor() {
        }
    }
};

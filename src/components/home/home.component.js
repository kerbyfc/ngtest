import './home.less';
import template from './home.html';

export let HomeComponent = {
    templateUrl: template,
    selector: 'home',
    bindings: {},
    /* @ngInject */
    controller: class HomeCtrl {
        /* @ngInject */
        constructor($state) {
            Object.assign(this, {$state});
        }
    }
};

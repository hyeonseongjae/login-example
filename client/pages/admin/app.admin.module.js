import coreBaseModule from '../../../../core/client/modules/base/core.base.module';

import config from './config/app.admin.config';
import routing from './config/app.admin.route';

import MainCtrl from './controllers/app.admin.controllers';

const APP_NAME = "app.admin";

angular.module(APP_NAME, [coreBaseModule])
    .config(config)
    .config(routing)
    .controller('MainCtrl', MainCtrl);

if (window.location.hash === '#_=_') window.location.hash = '';

angular.element(document).ready(function () {
    angular.bootstrap(document, [APP_NAME]);
});

export default APP_NAME;

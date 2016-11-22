import '../../../../core/client/components/input-pass/_core.common.input-pass.scss';
import './assets/stylesheets/main.scss';
import coreBaseModule from '../../../../core/client/modules/base/core.base.module';
import sessionModule from '../../../../core/client/modules/session/core.session.module';

import config from './config/app.main.config';
import routing from './config/app.main.route';



import MainCtrl from './controllers/app.main.controllers';
import IndexCtrl from './controllers/app.main.index.controllers';
import RedirectCtrl from './controllers/app.main.redirect.controller';
import NoticeCtrl from './controllers/app.main.notice.controllers';
import NoticeModalCtrl from './controllers/app.main.notice-modal.controllers';
import ReportCtrl from './controllers/app.main.report.controllers';
import ReportModalCtrl from './controllers/app.main.report-modal.controllers';
import ModalInstanceCtrl from './controllers/app.main.modal-instance.controllers';

import appResources from './services/app.main.constant';
import navigator from './services/app.main.navigator';
import UserManager from './services/app.main.user.manager';
import UserService from './services/app.main.user-service.model';
import Notice from './services/app.main.notice.model';
import noticeManager from './services/app.main.notices.manager';
import reportsManager from './services/app.main.reports.manager';
import Report from './services/app.main.report.model';

import noticeEvent from './directives/notice-event/app.main.notice-event';

const APP_NAME = "app.main";

angular.module(APP_NAME, [
    coreBaseModule,
    sessionModule])
    .config(config)
    .config(routing)
    .controller('IndexCtrl', IndexCtrl)
    .controller('MainCtrl', MainCtrl)
    .controller('RedirectCtrl', RedirectCtrl)
    .controller('NoticeCtrl', NoticeCtrl)
    .controller('NoticeModalCtrl', NoticeModalCtrl)
    .controller('ReportCtrl', ReportCtrl)
    .controller('ReportModalCtrl', ReportModalCtrl)
    .controller('ModalInstanceCtrl', ModalInstanceCtrl)
    .service("navigator", navigator)
    .service("UserManager", UserManager)
    .service("UserService", UserService)
    .service("noticeManager", noticeManager)
    .service("reportsManager", reportsManager)


    .factory("Notice", Notice)
    .factory("Report", Report)

    .directive("noticeEvent", noticeEvent)

    .constant("appResources", appResources);


if (window.location.hash === '#_=_') window.location.hash = '';

angular.element(document).ready(function () {
    angular.bootstrap(document, [APP_NAME]);
});

export default APP_NAME;

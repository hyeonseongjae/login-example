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
import SigninCtrl from './controllers/auth/app.main.signin.controller';
import AuthMobileCtrl from './controllers/auth/app.main.auth-mobile.controllers';
import SignUpCtrl from './controllers/auth/app.main.signup.controllers';
import SignUpCompleteCtrl from './controllers/auth/app.main.signup-complete.controller';
import ProfileCtrl from './controllers/auth/app.main.profile.controller';

import appResources from './services/app.main.constant';
import navigator from './services/app.main.navigator';
import UserManager from './services/app.main.user.manager';
import UserService from './services/app.main.user-service.model';
import Notice from './services/app.main.notice.model';
import noticeManager from './services/app.main.notices.manager';
import reportsManager from './services/app.main.reports.manager';
import Report from './services/app.main.report.model';
import Facebook from './services/app.main.facebook';
import KakaoTalk from './services/app.main.kakao';
import Unique from './services/app.main.unique.model';
import Pass from './services/app.main.pass.model';

import sendPhoneService from './services/app.main.sender-phone.service';
import accountsManager from './services/app.main.accounts.manager';
import SenderPhone from './services/app.main.sender-phone.model';
import AuthPhone from './services/app.main.auth-phone.model';
import noticeEvent from './directives/notice-event/app.main.notice-event';
import passwordVerify from './directives/password-verify';
import passwordChangeVerify from './directives/password-change-verify';



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
    .controller('SigninCtrl', SigninCtrl)
    .controller('AuthMobileCtrl', AuthMobileCtrl)
    .controller('SignUpCtrl', SignUpCtrl)
    .controller('SignUpCompleteCtrl', SignUpCompleteCtrl)
    .controller('ProfileCtrl', ProfileCtrl)


    .service("navigator", navigator)
    .service("UserManager", UserManager)
    .service("UserService", UserService)
    .service("noticeManager", noticeManager)
    .service("reportsManager", reportsManager)
    .service("accountsManager", accountsManager)
    .service("Unique", Unique)
    .service("Pass", Pass)

    .factory('SenderPhone', sendPhoneService)

    .factory("Notice", Notice)
    .factory("Report", Report)
    .factory('Facebook', Facebook)
    .factory('KakaoTalk', KakaoTalk)
    .factory("SenderPhone", SenderPhone)
    .factory("AuthPhone", AuthPhone)


    .directive("noticeEvent", noticeEvent)
    .directive('passwordVerify', passwordVerify)
    .directive('passwordChangeVerify', passwordChangeVerify)


    .constant("appResources", appResources);


if (window.location.hash === '#_=_') window.location.hash = '';

angular.element(document).ready(function () {
    angular.bootstrap(document, [APP_NAME]);
});

export default APP_NAME;


navigator.$inject = ['$document', '$state'];

export default function navigator($document, $state) {
    this.setBeforeCallback = null;
    this.setCompleteCallback = null;
    this.goToSignUp = goToSignUp;
    this.goToHome = goToHome;
    this.goToLogin = goToLogin;
    this.goToNotice = goToNotice;
    this.goToReport = goToReport;

    var self = this;

    function goTo (name, param, reload, callback) {
        if (self.setBeforeCallback) {
            self.setBeforeCallback();
        }

        $state.go(name, param, {
            reload: reload
        }).then(function () {
            if (self.setCompleteCallback) {
                self.setCompleteCallback();
            }
            if (callback) {
                callback();
            }
        });
    }

    function goToSignUp() {
        goTo("index.signUp");
    }

    function goToHome() {
        goTo("index.home");
    }

    function goToLogin() {
        goTo("index.login");
    }

    function goToSignUp(){
        goTo("index.signup");
    }

    function goToNotice() {
        goTo("index.notice");
    }

    function goToReport() {
        goTo("index.notice");
    }
}
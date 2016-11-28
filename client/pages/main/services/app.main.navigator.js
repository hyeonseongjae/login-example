
navigator.$inject = ['$document', '$state'];

export default function navigator($document, $state) {
    this.setBeforeCallback = null;
    this.setCompleteCallback = null;
    this.goToSignUp = goToSignUp;
    this.goToHome = goToHome;
    this.goToSignin = goToSignin;
    this.goToNotice = goToNotice;
    this.goToReport = goToReport;
    this.goToComplete = goToComplete;
    this.goToSocial = goToSocial;
    this.goToMobileCheck = goToMobileCheck;
    this.goToFindId = goToFindId;
    this.goToFindPass = goToFindPass;
    this.goToNick = goToNick;
    this.goToProfile = goToProfile;
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
        goTo("auth.signUp");
    }

    function goToSocial(){
        goTo("auth.social")
    }

    function goToHome() {
        goTo("home");
    }

    function goToComplete() {
        goTo("auth.complete");
    }

    function goToSignin() {

        goTo("auth.signin");
    }

    function goToSignUp(){
        goTo("auth.signup");
    }

    function goToNotice() {
        goTo("auth.notice");
    }

    function goToReport() {
        goTo("auth.notice");
    }

    function goToMobileCheck(){
        goTo("auth.mobileCheck");
    }

    function goToFindId(){
        goTo("auth.findId");
    }

    function goToFindPass(){
        goTo("auth.findPass");
    }

    function goToNick(){
        goTo("auth.nick");
    }

    function goToProfile(){
        goTo("auth.profile")
    }
}
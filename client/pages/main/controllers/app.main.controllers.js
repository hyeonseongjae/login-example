export default function MainCtrl($scope, $location, $injector, $cookies, sessionManager, errorHandler, metaManager, navigator, UserManager, dialogHandler, $uibModal) {

    var vm = $scope.vm = {};
    
    vm.isLoggedIn = {};
    vm.loginForm = {};
    vm.userInfo = {};
    vm.mobileCheckType = null;

    vm.isLoggedIn = sessionManager.isLoggedIn;
    vm.dialogHandler = dialogHandler;

    vm.USER = metaManager.std.user;
    vm.APP = metaManager.std.app;
    vm.CODES = metaManager.codes.ko;
    vm.LANGS = metaManager.langs.ko;



    vm.goToSignUp = goToSignUp;
    vm.goToSignin = goToSignin;
    vm.goToComplete = goToComplete;
    vm.goToSocial = goToSocial;
    vm.goToMobileCheck = goToMobileCheck;
    vm.goToFindId = goToFindId;
    vm.goToFindPass = goToFindPass;
    vm.goToHome = goToHome;
    vm.logout = logout;
    vm.goToNick = goToNick;
    vm.userLeave = userLeave;
    vm.goToProfile = goToProfile;




    function goToFindId(){
        vm.mobileCheckType = vm.USER.authPhoneFindId;
        navigator.goToFindId();
    }
    function goToSocial(){
        navigator.goToSocial();
    }
    function goToSignUp() {
        navigator.goToSignUp();
    }

    function goToSignin() {
        navigator.goToSignin();
    }

    function goToComplete(){
        navigator.goToComplete();
    }

    function goToMobileCheck(){
        navigator.goToMobileCheck();
    }

    function goToFindPass(){
        vm.mobileCheckType = vm.USER.authPhoneFindPass;
        navigator.goToFindPass();
    }

    function goToHome(){
        navigator.goToHome();
    }

    function goToNick(){
        navigator.goToNick();
    }

    function goToProfile(){
        navigator.goToProfile();
    }


    function logout() {
        sessionManager.logout(function (status) {
            if (status == 204) {
                goToSignin();
            } else {
                errorHandler.alertError(status);
            }
        });
    }

    function userLeave(){
        sessionManager.getSession(function(status, data){
            if(status == 200){
                var userId = data.id;
                sessionManager.deleteUser(userId, function(status){
                    if (status == 204) {
                        goToSignin();
                    } else {
                        errorHandler.alertError(status);
                    }
                })
            }

        });


    }


}

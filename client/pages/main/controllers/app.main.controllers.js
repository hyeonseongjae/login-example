export default function MainCtrl($scope, $location, $cookies, sessionManager, errorHandler, metaManager, navigator, UserManager, dialogHandler, $uibModal) {

    var vm = $scope.vm = {};
    
    vm.isLoggedIn = {};
    vm.loginForm = {};
    var form = vm.form = {};
    vm.userInfo = {};

    vm.isLoggedIn = sessionManager.isLoggedIn;

    vm.signUp = signUp;
    vm.logout = logout;
    vm.login = login;
    vm.goToSignUp = goToSignUp;
    vm.goToLogin = goToLogin;
    vm.dialogHandler = dialogHandler;


    if(vm.isLoggedIn()){
        checkLogined();
    }

    function checkLogined(){
        var userId = $cookies.get("userId");
        var userInfo = $cookies.get("userInfo");

        UserManager.getLoginedUserInfoById(userId, function (status, data) {
            if (status == 200) {

                vm.userInfo.email = data.email;
                vm.userInfo.nick = data.nick;

            } else {
                // vm.exitApp();
            }
        });

    }

    function goToSignUp() {
        navigator.goToSignUp();
    }

    function goToLogin() {
        navigator.goToLogin();
    }

    function signUp(signUpForm) {

        var user = {
            secret: signUpForm.pass,
            uid: signUpForm.email,
            nick: signUpForm.nick,
            agreedEmail: true,
            type: metaManager.std.user.defaultSignUpType
        };



        sessionManager.signup(user, function (status, data) {
            if (status == 201) {
                console.log(data);
            } else {
                errorHandler.alertError(status, data);
            }
        });
    }
    
    function logout() {
        sessionManager.logout(function (status) {
            if (status == 204) {
                goToLogin();
            } else {
                errorHandler.alertError(status);
            }
        });
    }

    function login (loginForm) {
        sessionManager.loginWithEmail(loginForm.email, loginForm.pass, function (status, data) {
            if (status == 200) {


                vm.userInfo.email = data.email;
                vm.userInfo.nick = data.nick;

                $cookies.put("userId", data.id);
                $cookies.put("userInfo", data.email);

                navigator.goToHome();
            } else {
                errorHandler.alertError(status, data);
            }
        });
    }

    function deleteUser(deleteForm) {

        sessionManager.deleteUser(deleteForm.email, function (status, data) {
            if (status == 204) {
                $cookies.remove("userinfo");
                $cookies.remove("userId");
                logout();
            } else {
                errorHandler.alertError(status, data);
            }
        });
    }




}

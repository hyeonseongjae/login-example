export default function MainCtrl($scope, $location, sessionManager, errorHandler, metaManager, navigator) {
    $scope.isLoggedIn = {};
    $scope.loginForm = {};
    var form = $scope.form = {}
    var userInfo = $scope.userInfo = {}

    $scope.isLoggedIn = sessionManager.isLoggedIn;

    $scope.signUp = signUp;
    $scope.logout = logout;
    $scope.login = login;
    $scope.goToSignUp = goToSignUp;
    $scope.goToLogin = goToLogin;
    
    function goToSignUp() {
        navigator.goToSignUp();
    }

    function goToLogin() {
        navigator.goToLogin();
    }

    function signUp(signUpForm) {
        console.log(signUpForm);
        var user = {
            secret: form.pass,
            uid: form.email,
            nick: form.nick,
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
        sessionManager.loginWithEmail(form.email, form.pass, function (status, data) {
            if (status == 200) {
                $scope.form = {};
                userInfo.email = data.email;
                userInfo.nick = data.nick;
                navigator.goToHome();
            } else {
                errorHandler.alertError(status, data);
            }
        });
    }

    function deleteUser(deleteForm) {
        console.log("회원 탈퇴함 ㅋㅋㅋ");
        sessionManager.deleteUser(userInfo.email, function (status, data) {
            if (status == 204) {
                logout();
            } else {
                errorHandler.alertError(status, data);
            }
        });
    }
}

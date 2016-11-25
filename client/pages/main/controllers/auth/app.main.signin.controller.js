export default function SigninCtrl($scope, $rootScope, Facebook, KakaoTalk,  dialogHandler, metaManager, sessionManager, errorHandler) {

    var vm = $scope.vm;

    if(!vm.loginUser) {

        vm.signin  = function(loginForm) {
            sessionManager.loginWithNormalId(loginForm.uid, loginForm.pass, function (status, data) {
                if (status == 200) {

                    vm.userInfo.uid = data.uid;
                    vm.userInfo.nick = data.nick;

                    $rootScope.$broadcast("core.session.callback", {
                        type: 'login'
                    });

                    navigator.goToHome();
                } else {
                    errorHandler.alertError(status, data);
                }
            });
        };


        vm.facebookLogin = function () {
            Facebook.login(function (res) {
                var accessToken = res.authResponse.accessToken;

                Facebook.getData({}, function (res) {
                    Facebook.getProfileImage({}, function(res1){
                        var profileImg = res1.data.url;
                        sessionManager.socialLogin(vm.USER.enumProviders[0], res.id, accessToken, function (status, data) {
                            if (status == 200) {
                                vm.loginUser = data;
                                vm.goToHome();

                            } else if (status == 301 || status == 403) {
                                // dialogHandler.show('', '아이디가 존재하지 않습니다.', '', true);
                                vm.socialSignUpInfo = {
                                    provider: vm.USER.enumProviders[0],
                                    pid: res.id,
                                    accessToken: accessToken,
                                    nick: res.name
                                };


                                vm.goToNick();

                            } else {
                                dialogHandler.alertError(status, data);
                            }
                        });
                    })
                });

            });
        };

        vm.kakaoLogin = function () {

            KakaoTalk.login(function (res) {
                var accessToken = res.access_token;

                KakaoTalk.setToken(accessToken);
                KakaoTalk.getData(function (resData) {

                    sessionManager.socialLogin(vm.USER.enumProviders[3], resData.id, accessToken, function (status, data) {
                        if (status == 200) {
                            vm.loginUser = data;
                            vm.goToHome();
                        } else if (status == 301 || status == 403) {
                            // dialogHandler.show('', '아이디가 존재하지 않습니다.', '', true);
                            var name = "";
                            console.log(resData.properties);
                            if(resData.properties){
                                name = resData.properties.nickname;
                            }

                            vm.socialSignUpInfo = {
                                provider: vm.USER.enumProviders[3],
                                pid: resData.id,
                                accessToken: accessToken,
                                nick: name
                            };

                            vm.goToNick();
                        } else {
                            dialogHandler.alertError(status, data);
                        }
                    });
                });
            });
        };

    } else {
        vm.goToHome();
    }


}
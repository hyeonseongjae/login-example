export default function SigninCtrl($scope, Facebook, $rootScope, $timeout, dialogHandler,  navigator, metaManager, sessionManager, errorHandler, accountsManager) {

    var vm = $scope.vm;
    vm.signUp = signUp;
    vm.deleteUser = deleteUser;
    vm.signupSocialNick = signupSocialNick;

    if(!vm.socialSignUpInfo){

        $scope.$watch('signupForm.uid', function (newVal, oldVal) {
            var body = {
                newVal: newVal,
                oldVal: oldVal,
                key: "aid"

            };

            checkService(body, function(status){
                if(!status){
                    $scope.signupForm.id.$setValidity("unique", false);
                }
                else{
                    $scope.signupForm.id.$setValidity("unique", true);
                }
            });

        }, true);

        $scope.$watch('signupForm.nick', function (newVal, oldVal) {
            var body = {
                newVal: newVal,
                oldVal: oldVal,
                key: "nick"

            };

            checkService(body, function(status){
                if(!status){
                    $scope.signupForm.nickname.$setValidity("unique", false);
                }
                else{
                    $scope.signupForm.nickname.$setValidity("unique", true);
                }
            });

        }, true);


        function checkService(body, callback) {
            $timeout(function() {
                if(!angular.isUndefined(body.newVal) && body.newVal != body.oldVal &&
                    body.newVal.length < vm.USER.maxIdLength){

                    var query = {
                        key: body.key,
                        value: body.newVal
                    };

                    accountsManager.checkAccountsUnique(query, function(status, data){
                        if( status == 409){
                            callback(false);
                        }
                        else{
                            callback(true);
                        }
                    });
                }
            },500);
        }




        $scope.$watch('signupForm.pass', function (newVal, oldVal) {
            if($scope.signupForm.passwordConfirm.$viewValue){
                if($scope.signupForm.passwordConfirm.$viewValue !== newVal){
                    $scope.signupForm.passwordConfirm.$setValidity("passwordVerify", false);
                }else{
                    $scope.signupForm.passwordConfirm.$setValidity("passwordVerify", true);
                }
            }
        }, true);
    }


    function signupSocialNick(){

        var body = {
            type: vm.USER.signUpTypeSocial,
            provider: vm.socialSignUpInfo.provider,
            uid: vm.socialSignUpInfo.pid,
            secret: vm.socialSignUpInfo.accessToken,
            nick: vm.socialSignUpInfo.nick
        };

        sessionManager.signup(body, function (status, data) {
            if (status == 201) {

                $rootScope.$broadcast("core.session.callback", {
                    type: 'login'
                });

                navigator.goToComplete();
            } else {
                errorHandler.alertError(status, data);
            }
        });

    }

    function signUp(signUpForm) {

        if(!signUpForm.pass || !signUpForm.uid || !signUpForm.nick){
            dialogHandler.show('', vm.CODES["400_14"], vm.LANGS.confirm, false, function () {
                return;
            });
        }
        else{
            var userInfo = {
                apass: signUpForm.pass,
                aid: signUpForm.uid,
                nick: signUpForm.nick
            };

            vm.userSignUpInfo = userInfo;
            vm.mobileCheckType = vm.USER.authPhoneSignup;
            navigator.goToMobileCheck();
        }
    }





    function deleteUser(deleteForm) {

        sessionManager.deleteUser(deleteForm.email, function (status, data) {
            if (status == 204) {
                vm.logout();
            } else {
                errorHandler.alertError(status, data);
            }
        });
    }



}




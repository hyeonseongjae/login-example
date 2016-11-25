
export default function AuthMobileCtrl($scope, $rootScope, $state, $interval, accountsManager, errorHandler, AuthPhone, sessionManager) {

    var vm = $scope.vm;



    vm.sendAuthNum = sendAuthNum;
    vm.certificationPhoneNum = certificationPhoneNum;
    var type = vm.USER.authPhoneSignup;

    if(!vm.mobileCheckType && !vm.userSignUpInfo && !vm.authPhoneFindPass){
        vm.goToSignUp();
    }

    if(vm.mobileCheckType == vm.USER.authPhoneFindId){
        type = vm.USER.authPhoneFindId;
    }

    if(vm.mobileCheckType == vm.USER.authPhoneFindPass){
        type = vm.USER.authPhoneFindPass;
    }


    function sendAuthNum() {
        vm.loading = true;

        var userPhoneNumber = vm.userPhoneNum;

        var regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
        var myRe = new RegExp(regExp);

        if(myRe.exec(userPhoneNumber)){
            userPhoneNumber = vm.userPhoneNum.replace(/\-/g,'');
            userPhoneNumber = userPhoneNumber.replace(/(^0+)/, "");
        }
        else{
            window.alert("잘못된 번호를 입력하였습니다");
        }



        var body = {
            phoneNum: vm.APP.defaultCountryCode+userPhoneNumber,
            type: type
        };


        if (stop) $interval.cancel(stop);

        accountsManager.sendAuthNum(body, function (status, data) {
            if (status == 200) {
                window.alert("인증번호가 발송 되었습니다");
                runCountdown();
                $scope.canInputAuthorzationNum = true;
            } else {
                errorHandler.alertError(status, data);
            }
        });
    }

    function certificationPhoneNum () {

        if(!vm.userPhoneNumCertification || !vm.userPhoneNum){
            errorHandler.alertError(400, "");
            return;
        }

        if(!vm.userSignUpInfo && type == vm.USER.authPhoneSignup){
            vm.goToSignUp();
        }


        var regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
        var myRe = new RegExp(regExp);

        if(myRe.exec(vm.userPhoneNum)){
            vm.userPhoneNum = vm.userPhoneNum.replace(/\-/g,'');
            vm.userPhoneNum = vm.userPhoneNum.replace(/(^0+)/, "");
        }

        var body = {};

        if(type == vm.USER.authPhoneSignup){

            type = vm.USER.signUpTypePhone;

            body = {
                type : type,
                uid : vm.APP.defaultCountryCode+vm.userPhoneNum,
                secret : vm.userPhoneNumCertification,
                apass: vm.userSignUpInfo.apass,
                aid: vm.userSignUpInfo.aid,
                nick: vm.userSignUpInfo.nick
            };

            sessionManager.signup(body, function (status, data) {
                if (status == 201) {

                    $rootScope.$broadcast("core.session.callback", {
                        type: 'login'
                    });

                    vm.goToComplete();
                } else {
                    errorHandler.alertError(status, data);
                }
            });
        }
        else if(type == vm.USER.authPhoneFindId || type == vm.USER.authPhoneFindPass){

            body = {
                type : type,
                token : vm.userPhoneNumCertification
            };

            accountsManager.checkAuthPhoneNum(body, function (status, data) {

                if (status == 200) {

                    vm.FindId = data.aid;

                    if(type == vm.USER.authPhoneFindPass){
                        alert("비밀번호가 전송되었습니다.");
                        vm.goToSignin();
                    }

                } else {
                    errorHandler.alertError(status, data);
                }
            });
        }


    }


    function runCountdown () {

        var now = (new Date()).getTime();
        var finish = now + vm.USER.expiredPhoneTokenMinutes * 60 * 1000;
        vm.counter = finish - now;
        stop = $interval(function () {
            var start = (new Date()).getTime();
            vm.counter = finish - start;
            var sec = parseInt((vm.counter / 1000) % 60);
            if (sec < 10) sec = '0' + sec;
            vm.remainTime = parseInt(((vm.counter / 1000) / 60)) + ":" + sec;
            if (start + 1000 > finish) {
                if (stop) $interval.cancel(stop);
            }
        }, 1000);
    }

}
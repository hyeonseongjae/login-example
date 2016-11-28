export default function ProfileCtrl($scope, dialogHandler,  navigator, metaManager, sessionManager, UserManager) {
    var vm = $scope.vm;

    vm.profilePassChange = profilePassChange;

    function profilePassChange(profilePassChangeForm){


        console.log(profilePassChangeForm);
        UserManager.updatePass(profilePassChangeForm, )

    }

}
export default function NoticeModalCtrl($scope, $state, noticeManager) {
    var vm = $scope.vm;

    // vm.noticeSend = noticeSend;
    //
    // vm.noticeDelete = noticeDelete;

    function noticeDelete(item){
        if(item.id){
            noticeManager.deleteNotice(item, function(status, data){
               if(status == 204){
                   vm.closeModal();
                   for (var i=0; i<vm.noticeItems.list.length; i++) {
                       if (vm.noticeItems.list[i].id == item.id) {
                           vm.noticeItems.list.splice(i, 1);
                           break;
                       }
                   }

               }
               else{
                   vm.dialogHandler.alertError(status, data);
               }
            });
        }
    }


    function noticeSend(item){
        if(item.id){
            noticeManager.updateNotice(item, function (status, data) {
                if (status == 200) {

                    vm.closeModal();
                    var noticeItems = vm.noticeItems.list;
                    for(var i=0; i<noticeItems.length; i++){
                        if(noticeItems[i].id == item.id){
                            noticeItems[i] = item;
                        }
                    }

                } else {
                    vm.dialogHandler.alertError(status, data);
                }
            });
        }
        else{
            noticeManager.createNotice(item, function (status, data) {
                if (status == 200) {
                    vm.closeModal();
                    vm.noticeItems.list.unshift(data);
                } else {
                    vm.dialogHandler.alertError(status, data);
                }


            });
        }

    }


}

export default function ReportModalCtrl($scope, $state, reportsManager) {
    var vm = $scope.vm;

    vm.reportSend = reportSend;

    vm.reportDelete = reportDelete;

    function reportDelete(item){
        if(item.id){
            reportsManager.deleteReport(item, function(status, data){
               if(status == 204){
                   vm.closeModal();
                   for (var i=0; i<vm.reportItems.list.length; i++) {
                       if (vm.reportItems.list[i].id == item.id) {
                           vm.reportItems.list.splice(i, 1);
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


    function reportSend(item){

        if(item.id){
            reportsManager.updateReport(item, function (status, data) {
                if (status == 200) {

                    vm.closeModal();
                    var reportItems = vm.reportItems.list;
                    for(var i=0; i<reportItems.length; i++){
                        if(reportItems[i].id == item.id){
                            reportItems[i] = item;
                        }
                    }

                } else {
                    vm.dialogHandler.alertError(status, data);
                }
            });
        }
        else{
            reportsManager.createReport(item, function (status, data) {
                if (status == 200) {
                    vm.closeModal();
                    vm.reportItems.list.unshift(data);
                } else {
                    vm.dialogHandler.alertError(status, data);
                }


            });
        }

    }

}
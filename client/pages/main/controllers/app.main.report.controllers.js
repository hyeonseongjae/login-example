export default function ReportCtrl($scope, $state, reportsManager) {

    var vm = $scope.vm;

    vm.reportItems = {
        list : []
    };
    vm.reportDetailItem = null;

    getReports();

    vm.clickReport = clickReport;

    vm.closeModal = function(){
        var $modal = angular.element( document.querySelector( '#report-modal' ) );

        $modal.removeClass('in');

        vm.noticeDetail = null;

    };


    function getReports(){
        var query  = {};
        reportsManager.findReports(query, function(status, data){
            if(status == 200){
                vm.reportItems.list = vm.reportItems.list.concat(data.rows);

            }
            else{

            }
        });
    }


    function clickReport(item){
        vm.reportDetail = item;

        var $modal = angular.element( document.querySelector( '#report-modal' ) );
        $modal.addClass('in');

        if(vm.reportDetail){
            reportsManager.findNoticeById(item.id, function (status, data){
                if(data){
                   vm.reportDetailItem = data;
               }
            });
        }
        else{
            vm.reportDetailItem = null;
        }
    }

}
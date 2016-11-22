export default function NoticeCtrl($scope, $state, noticeManager, $uibModal) {

    var vm = $scope.vm;
    vm.noticeItems = {
        list : []
    };

    getNotices();


    vm.clickNotice = clickNotice;

    vm.closeModal = function(){
        var $modal = angular.element( document.querySelector( '#notice-modal' ) );

        $modal.removeClass('in');

        vm.noticeDetail = null;

    };


    function getNotices(){
        var query  = {};
        noticeManager.findNotices(query, function(status, data){
            if(status == 200){
                vm.noticeItems.list = data.rows;
            }
            else{

            }
        });
    }



    function clickNotice(item){
        vm.noticeDetailItem = null;

        var modalInstance = null;

        if(item){
            noticeManager.findNoticeById(item.id, function (status, data){
                if(data){
                    vm.noticeDetailItem = data;


                }
            });
        }
        else{
            vm.noticeDetailItem = null;

        }

    }



    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];

    $ctrl.animationsEnabled = true;

    $ctrl.open = function () {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: 'lg',
            resolve: {
                items: $ctrl.items,
                vm: vm
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            console.info('Modal dismissed at: ' + new Date());
        });
    };


}
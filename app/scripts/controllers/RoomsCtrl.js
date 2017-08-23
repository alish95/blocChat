(function() {
  function RoomsCtrl(Room, $uibModal) {

    var ctrl = this;
    ctrl.allRooms = Room.all;

    ctrl.open = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        size: 'sm'
      });
    };

  }

  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Room', '$uibModal', RoomsCtrl]);
})();

(function() {
  function RoomsCtrl(Room, Messages, $uibModal) {

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

    ctrl.setCurrentRoom = function(room) {
      ctrl.currentRoom = room;
      ctrl.messages = Messages.getByRoomId(room.$id);
      ctrl.displayName = "(You are currently in the " + room.name + " room)";
    };

  }

  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Room', 'Messages', '$uibModal', RoomsCtrl]);
})();

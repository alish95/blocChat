(function() {
  function RoomModalCtrl($scope, Messages, $uibModalInstance) {

    $scope.create = function() {
      Messages.addRoom($scope.newRoom);
      $uibModalInstance.close();
    };

    $scope.cancel = function() {
      console.log('cancelled creating room');
      $uibModalInstance.dismiss('cancel');
    };

  };

  angular
    .module('blocChat')
    .controller('RoomModalCtrl', ['$scope', 'Messages', '$uibModalInstance', RoomModalCtrl]);
})();

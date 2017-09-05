(function() {
  function Messages($firebaseArray) {

    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    return {
      all: messages,
      getByRoomId: function(roomId) {
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      }
    };

  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();

(function() {
    function Message($firebaseArray, $cookies) {
        var messageRef = firebase.database().ref().child("Messages");
        var messageReference = firebase.database().ref().child("Messages").orderByChild("roomId");

        Message.getByRoomId = function(roomId) {
            return $firebaseArray(messageReference.equalTo(roomId));
        }

        return Message;
    };

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray','$cookies', 'Room', Message]);
})();

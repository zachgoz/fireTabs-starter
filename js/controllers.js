angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $firebase, Chats) {
    $scope.chats = Chats.all();
    $scope.add = function(message){
        Chats.add(message);
    };
    $scope.upvote = function(id){
        Chats.upvote(id);
    };
    $scope.downvote = function(id){
        Chats.downvote(id);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

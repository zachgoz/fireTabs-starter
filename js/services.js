angular.module('starter.services', ['firebase'])

.factory('Chats', function($firebase) {

  var ref = new Firebase("https://fblachat.firebaseio.com/");
  var sync = $firebase(ref);
  var chats = sync.$asArray();  // create a synchronized array for use in our HTML code

  return {
    all: function() {
      return chats;
    },
    add: function(message) {
      chats.$add({ text: message, votes: 0 });
    },
    upvote: function(id) {
      ref.child(id + "/votes").transaction(function(currentValue) {
          return (currentValue || 0) + 1;
      });
    },
    downvote: function(id){
      ref.child(id + "/votes").transaction(function(currentValue) {
          if(currentValue == -4){
            ref.child(id).remove();
          } else {
            return (currentValue || 0) - 1;
          }
      });
    }
  }
});
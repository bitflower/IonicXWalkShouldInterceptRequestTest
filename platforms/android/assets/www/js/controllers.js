angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $sce) {

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    $scope.xwalktest = {
        loadUrl: function() {
            $scope.iframeUrl = $scope.trustSrc('http://www.bitflower.net');
        }
    };


})

.controller('ChatsCtrl', function($scope, Chats) {

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});

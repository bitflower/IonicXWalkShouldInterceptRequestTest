angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $sce, $timeout) {

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    };

    $scope.xwalktest = {
        loadUrl: function() {
            reportBackToObjectiveC('loadinternal');
            $scope.iframeUrl = $scope.trustSrc('http://www.securikett.com');

            $timeout(function() {
                reportBackToObjectiveC('something');
            }, 7000);

        }
    };

    // HELPER: Call objective-c method
    function reportBackToObjectiveC(string) {

        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", string + "://");
        document.documentElement.appendChild(iframe);
        iframe.parentNode.removeChild(iframe);
        iframe = null;
    }


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

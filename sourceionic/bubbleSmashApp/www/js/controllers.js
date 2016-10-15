angular.module('starter.controllers', [])


.controller('BubbleController', function($scope, Chats) {
    $scope.easyLevel = function(){
        $state.go('easyLevel')        
    }
    $scope.intermediateLevel = function(){
        $state.go('intermediateLevel')        
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller("BubbleController", function($scope, $state, $window) {
   
    var init = function () {
        alert("eeasy");
        $scope.score=0;
    };
    init();
    // Easy Level
    
    var bubbleIcon = document.getElementById("bubbleIcon"); 
    var bubble = document.getElementById("bubble"); 
    setInterval(function(){ $state.go('scorepage') }, 100000);
    bubbleIcon.style.display = 'block'; 
    $scope.easylevelcount = 0;
    $scope.loop = function(){
        var offsets = document.getElementById('bubble').getBoundingClientRect();
        var top = offsets.top;
        bubbleIcon.style.display = 'block';
        bubble.style.marginTop = -top - 500 + 'px';
    }
    $scope.smashBubble = function(){
        $scope.easylevelcount = $scope.easylevelcount + 1;
        bubbleIcon.style.display = 'none';  
        setTimeout(function(){
            $scope.loop();
        },100);
        $scope.score =  $scope.easylevelcount;
    } 
    var score = function (){
        alert("score"+ $scope.score);
        $scope.score = $scope.score;
    }
    score();
});
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
    
});

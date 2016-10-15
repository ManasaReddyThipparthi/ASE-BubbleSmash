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
})

bubbleSmashApp.controller("IntermediateController", function($scope, $state) {    
    var bubbleIcon1 = document.getElementById("bubbleIcon1"); 
    var bubbleIcon2 = document.getElementById("bubbleIcon2"); 
    var bubbleIcon3 = document.getElementById("bubbleIcon3"); 
    var bubble1 = document.getElementById("bubble1"); 
    var bubble2 = document.getElementById("bubble2");
    var bubble3 = document.getElementById("bubble3"); 
    bubbleIcon1.style.display = 'block';  
    bubbleIcon2.style.display = 'block'; 
    bubbleIcon3.style.display = 'block'; 
    $scope.loop1 = function(){
        bubbleIcon1.style.display = 'block';
        bubble1.style.top = '-200px';
        bubble1.style.position = 'absolute';
    }
    $scope.loop2 = function(){
        bubbleIcon2.style.display = 'block';
        bubble2.style.top = '-200px';
        bubble2.style.position = 'absolute';
    }
    $scope.loop3 = function(){
        bubbleIcon3.style.display = 'block';
        bubble3.style.top = '-200px';
        bubble3.style.position = 'absolute';
    }
    $scope.smashBubbleIntermediate1 = function(){
        bubbleIcon1.style.display = 'none';  
        setTimeout(function(){
            $scope.loop1();
        },100)
    }
    $scope.smashBubbleIntermediate2 = function(){
        bubbleIcon2.style.display = 'none';  
        setTimeout(function(){
            $scope.loop2();
        },100)
    }
    $scope.smashBubbleIntermediate3 = function(){
        bubbleIcon3.style.display = 'none';  
        setTimeout(function(){
            $scope.loop3();
        },100)
    }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
    
});

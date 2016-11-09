bubbleSmashApp.controller("ScoreController", function($scope, $state, dataService) {
    $scope.data = dataService.dataObj;
    
    $scope.backToHome = function() {
        $state.go('backtohome')
    }
    
    $scope.quit = function() {
        $state.go('quit')
    }
});
bubbleSmashApp.controller("LoginController", function($scope, $http, $state, $window) {

    $scope.login = function(username, password) {
      $http({
        method: 'GET',
        url : 'https://api.mlab.com/api/1/databases/asedb/collections/demoase?apiKey=s2gDY_UX42GDk8QBsJSlGuQqrwXFGtxg'

      }).success(function(data) {
            var obj=angular.fromJson(data);
            var count=0;
            for(i=0;i<obj.length;i++)
            {
                if (angular.equals(obj[i].username, username)&&angular.equals(obj[i].password,password)) {
                    $state.go('home')
                }
                else {
                     count++;
                }
            }
             if(count==obj.length){
                $scope.msg ="Login Unsuccessful";
             }
      })
    }
    $scope.register = function(){
        $state.go('register')
    }
});
bubbleSmashApp.controller("RegisterController", function($scope, $http, $state, $window) {
     $scope.registerdata = function(name, username, password) {

       $http({
         method: 'POST',
         url : 'https://api.mlab.com/api/1/databases/asedb/collections/demoase?apiKey=s2gDY_UX42GDk8QBsJSlGuQqrwXFGtxg',
         data: JSON.stringify({
           name : name,
           username: username,
           password: password
         }),
         contentType: "application/json"
       }).success(function() {
         $scope.status ="User created successfully";
       }).error(function(data){
         $scope.status = "User Cannot be Created";
       })

     }
      
    $scope.cancel = function(){
        $state.go('cancel')
    }
   
});
bubbleSmashApp.controller("LevelController", function($scope, $http, $state, $window) {
     $scope.easylevel = function(){
        $state.go('easylevel')
    }

    $scope.intermediatelevel = function() {
        $state.go('intermediatelevel')
    }

      $scope.settings = function() {
        $state.go('settings')
    }

    $scope.help = function() {
        $state.go('help')
    }
});
bubbleSmashApp.controller("EasyLevelController", function($scope, $state, dataService) {

    // Easy Level
    $scope.count = 0;
    setInterval(function(){ $state.go('scorepage') }, 50000);
    $scope.smashBubble1 = function(){
        $scope.count = $scope.count + 1;
        document.getElementById('bubble1').classList.remove('animation');
        document.getElementById("bubble1").style.opacity = "0";
        setTimeout(
        function() {
            document.getElementById('bubble1').classList.add('animation');
            document.getElementById("bubble1").style.opacity = "1";
        }, 100);
        dataService.dataObj=$scope.count;
        $scope.data = dataService.dataObj;
    }
    
    $scope.smashBubble2 = function(){
        $scope.count = $scope.count + 5;
        document.getElementById('bubble2').classList.remove('animation');
        document.getElementById("bubble2").style.opacity = "0";
        setTimeout(
        function() {
            document.getElementById('bubble2').classList.add('animation');
            document.getElementById("bubble2").style.opacity = "1";
        }, 100);
        dataService.dataObj=$scope.count;
        $scope.data = dataService.dataObj;
    }
    $scope.smashBubble3 = function(){
        $scope.count = $scope.count + 1;
        document.getElementById('bubble3').classList.remove('animation');
        document.getElementById("bubble3").style.opacity = "0";
        setTimeout(
        function() {
            document.getElementById('bubble3').classList.add('animation');
            document.getElementById("bubble3").style.opacity = "1";
        }, 100);
        dataService.dataObj=$scope.count;
        $scope.data = dataService.dataObj;
    }
});
    // Intermediate Level
bubbleSmashApp.controller("IntermediateLevelController", function($scope, $state, dataService) {
    
    $scope.count = 0;
    setInterval(function(){ $state.go('scorepage') }, 50000);
    $scope.smashBubbleIntermediate1 = function(){
        $scope.count = $scope.count + 1;
        document.getElementById('bubbleIntermediate1').classList.remove('animation');
        document.getElementById("bubbleIntermediate1").style.opacity = "0";
        setTimeout(
        function() {
            document.getElementById('bubbleIntermediate1').classList.add('animation');
            document.getElementById("bubbleIntermediate1").style.opacity = "1";
        }, 100);
        dataService.dataObj=$scope.count;
        $scope.data = dataService.dataObj;
    }
    $scope.smashBubbleIntermediate2 = function(){
          $scope.count = $scope.count + 5;
        document.getElementById('bubbleIntermediate2').classList.remove('animation');
        document.getElementById("bubbleIntermediate2").style.opacity = "0";
        setTimeout(
        function() {
            document.getElementById('bubbleIntermediate2').classList.add('animation');
            document.getElementById("bubbleIntermediate2").style.opacity = "1";
        }, 100);
        dataService.dataObj=$scope.count;
        $scope.data = dataService.dataObj;
    }
    $scope.smashBubbleIntermediate3 = function(){
          $scope.count = $scope.count + 1;
        document.getElementById('bubbleIntermediate3').classList.remove('animation');
        document.getElementById("bubbleIntermediate3").style.opacity = "0";
        setTimeout(
        function() {
            document.getElementById('bubbleIntermediate3').classList.add('animation');
            document.getElementById("bubbleIntermediate3").style.opacity = "1";
        }, 100);
        dataService.dataObj=$scope.count;
        $scope.data = dataService.dataObj;
    }
    $scope.smashBubbleIntermediate4 = function(){
          $scope.count = $scope.count - 5;
        document.getElementById('bubbleIntermediate4').classList.remove('animation');
        document.getElementById("bubbleIntermediate4").style.opacity = "0";
        setTimeout(
        function() {
            document.getElementById('bubbleIntermediate4').classList.add('animation');
            document.getElementById("bubbleIntermediate4").style.opacity = "1";
        }, 100);
        dataService.dataObj=$scope.count;
        $scope.data = dataService.dataObj;
    }
    $scope.smashBubbleIntermediate5 = function(){
          $scope.count = $scope.count + 1;
        document.getElementById('bubbleIntermediate5').classList.remove('animation');
        document.getElementById("bubbleIntermediate5").style.opacity = "0";
        setTimeout(
        function() {
            document.getElementById('bubbleIntermediate5').classList.add('animation');
            document.getElementById("bubbleIntermediate5").style.opacity = "1";
        }, 100);
        dataService.dataObj=$scope.count;
        $scope.data = dataService.dataObj;
    }
});

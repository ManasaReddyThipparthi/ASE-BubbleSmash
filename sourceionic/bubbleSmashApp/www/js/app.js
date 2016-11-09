var bubbleSmashApp=angular.module("starter", ["ionic","ngCordova","firebase"]);

bubbleSmashApp.factory('dataService', function() {
  var _dataObj = '';
  return {
    dataObj: _dataObj
  };
})
bubbleSmashApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

bubbleSmashApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
  .state("login", {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "LoginController",
        cache: false
  })
  .state('register', {
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
  })
  .state('cancel', {
        url: '/cancel',
        templateUrl: 'templates/login.html'
  })
  .state('home', {
        url: '/home',
        templateUrl: 'templates/level.html',
        controller: 'LevelController'
  })
  .state('easylevel', {
        url: '/easylevel',
        templateUrl: 'templates/easyLevel.html',
        controller: 'EasyLevelController'
  })
  .state("intermediatelevel", {
        url: "/intermediatelevel",
        templateUrl: "templates/intermediatelevel.html",
        controller: "IntermediateLevelController"
  })
   .state('expertGame', {
		url: "/expertGame",
		templateUrl: "templates/expertGame.html",
		controller: 'expertGameLevelCtrl'
	})
  .state("help", {
        url: "/help",
        templateUrl: "templates/help.html"
  })
  .state("settings", {
        url: "/settings",
        templateUrl: "templates/settings.html"
  })
  .state("backtohome", {
        url: "/backtohome",
        templateUrl: "templates/level.html"
  })
  .state("quit", {
        url: "/quit",
        templateUrl: "templates/login.html"
  })  
  .state("scorepage", {
        url: "/scorepage",
        templateUrl: "templates/scorepage.html",
        controller: "ScoreController"
  });
  
  .state('rate', {
		url: "/rate",
		templateUrl: "templates/rate.html"
	
    
    })
  
    $urlRouterProvider.otherwise('/login');
})

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic','ngCordova','app.controllers', 'app.routes', 'app.directives','app.services','ngCordovaOauth','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider,$urlRouterProvider){
	$stateProvider

	.state('login', {
		url: "/login",
		templateUrl: "templates/login.html",
		controller: 'loginCtrl'
	})
    
    .state('register', {
		url: "/register",
		templateUrl: "templates/register.html",
		controller: 'registerCtrl'
	})
    
    .state('level', {
		url: "/level",
		templateUrl: "templates/level.html",
		controller: 'levelCtrl'
	})
    
    .state('beginnerGame', {
		/*url: "/beginnerGame",
		templateUrl: "templates/beginnerGame.html"*/
	})
  
    .state('intermediateGame', {
	/*	url: "/intermediateGame",
		templateUrl: "templates/intermediateGame.html"*/
	})
  
   .state('expertGame', {
		url: "/expertGame",
		templateUrl: "templates/expertGame.html",
		controller: 'expertGameLevelCtrl'
	})
  
   .state('help', {
		url: "/help",
		templateUrl: "templates/help.html",
	
	})
     .state('easylevel', {
    url: '/easylevel',
    templateUrl: 'templates/easylevel.html',
    controller: 'BubbleController'
  })

  .state("intermediatelevel", {
        url: "/intermediatelevel",
        templateUrl: "templates/intermediatelevel.html",
        controller: "IntermediateController"
  })
  .state("scorepage", {
        url: "/scorepage",
        templateUrl: "templates/scorepage.html"
  });
    
     .state('settings', {
		url: "/settings",
		templateUrl: "templates/settings.html"
	
	});
    
    	
$urlRouterProvider
    
    .otherwise('/login');
  
});

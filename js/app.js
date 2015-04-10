angular.module('app', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('home', {
      url: "/home",
      views: {
        '@': {
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

    $urlRouterProvider.otherwise('/home');

})

.controller('HomeCtrl', function($state, $cordovaInAppBrowser, $ionicPlatform) {
  console.log('loaded');
})
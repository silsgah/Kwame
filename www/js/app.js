// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'directory.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      ////if(window.Connection) {
      ////    if(navigator.connection.type == Connection.NONE) {
      ////        alert("No Internet Connection Found");
      ////    }
      ////}
      //if (window.Connection) {
      //    if (navigator.connection.type == Connection.NONE) {
      //        $ionicPopup.confirm({
      //            title: "Internet Disconnected",
      //            content: "The internet is disconnected on your device."
      //        })
      //        .then(function (result) {
      //            if (!result) {
      //                ionic.Platform.exitApp();
      //            }
      //        });
      //    }
      //}
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
   
  });
})




.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
            templateUrl: "templates/search.html",
            controller:'PictureCtrl'
        }
      }
    })
 .state('app.login', {
     url: "/login",
     views: {
         'menuContent': {
             templateUrl: "templates/login.html",
             controller: 'loginCtrl'
         }
     }
 })
    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
            templateUrl: "templates/browse.html",
            controller: 'MainCtrl'
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'listsCtrl'
        }
      }
    })
.state('app.locate', {
    url: "/locate",
    views: {
        'menuContent': {
            templateUrl: "templates/locate.html",
            controller: 'loginCtrl'
        }
    }
})
    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});



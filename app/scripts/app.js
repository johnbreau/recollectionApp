'use strict';

angular
  .module('recollectionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      
      .when('/dailyForm1', {
        templateUrl: 'views/dailyForm1.html',
        controller: 'AboutCtrl'
      })
     
      .when('/dailyForm2', {
        templateUrl: 'views/dailyForm2.html',
        controller: 'AboutCtrl'
      })

      .when('/dailyForm3', {
        templateUrl: 'views/dailyForm3.html',
        controller: 'AboutCtrl'
      })

       .when('/mainCalendar', {
         templateUrl: 'views/mainCalendar.html',
         controller: 'AboutCtrl'
      })

       .when('/entryLog', {
         templateUrl: 'views/entryLog.html',
         controller: 'AboutCtrl'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });

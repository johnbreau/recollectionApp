'use strict';

var recollectionApp = angular.module('recollectionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  

  //routing functions
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      
      .when('/dailyForm1', {
        templateUrl: 'views/dailyForm1.html'
      })
     
      .when('/dailyForm2', {
        templateUrl: 'views/dailyForm2.html'
      })

      .when('/dailyForm3', {
        templateUrl: 'views/dailyForm3.html'
      })

       .when('/mainCalendar', {
         templateUrl: 'views/mainCalendar.html'
      })

       .when('/entryLog', {
         templateUrl: 'views/entryLog.html'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });


recollectionApp.controller('dbCtrl', ['$scope', function($scope) {
  $scope.calendarData = "Hello ";
}]);
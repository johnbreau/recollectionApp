'use strict';

/**
 * @ngdoc overview
 * @name bdRaApp
 * @description
 * # bdRaApp
 *
 * Main module of the application.
 */
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
      .otherwise({
        redirectTo: '/'
      });
  });
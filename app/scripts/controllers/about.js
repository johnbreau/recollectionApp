'use strict';

/**
 * @ngdoc function
 * @name bdRecapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bdRecapApp
 */
angular.module('recollectionApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name mySaladApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mySaladApp
 */
angular.module('mySaladApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.generateNumber = function(){

    	$scope.randomNumber = Math.floor(Math.random()*4);

      $scope.newHeight = $scope.randomNumber * (- 150);//instead of a 'switch' block

      $scope.square = "background-position: 0px " + $scope.newHeight + "px;";      
    };
   

  });

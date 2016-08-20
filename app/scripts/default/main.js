'use strict';

/**
 * @ngdoc function
 * @name guaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guaApp
 */
angular.module('FoddieApp')
  .controller('MainCtrl', ['$scope', '$location' , function($scope, $location) {
   		$scope.go = function(path){
   			$location.path(path);
   		}
  }]);

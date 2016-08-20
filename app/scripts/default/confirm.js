angular.module("FoddieApp")

	.controller("ConfirmController" , ['$scope', 'content', function($scope, content){

		$scope.content = content;

	}]);

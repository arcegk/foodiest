angular.module("FoddieApp")
	
	.controller("menuController", [ '$scope','$http', 
		function($scope, $http){

			$scope.menu = {};
			$scope.keys = {};
			$scope.cart = []
			$scope.cartIdes = []
			$scope.cartd = []


			$scope.addToCart = function(dish){
				$scope.cart.push(dish)
				for (var i = $scope.cartd.length - 1; i >= 0; i--) {
					if ($scope.cartd[i].tipo == dish.tipo){
						$scope.cartIdes.splice($scope.cartIdes.indexOf($scope.cartd[i].id),1);
						$scope.cartd.splice(i,1);
					}
				}
				$scope.cartd.push({'id' : dish.id, 'tipo' : dish.tipo })
				$scope.cartIdes.push(dish.id)
				
			}

			$scope.load = function(){
				$http({
					method : 'GET',
					url : 'http://www.restauranteplaza.co/almuerzos/'
				}).then(
					function successCallback(response){
						$scope.menu = response;
						console.log(response);
						console.log(Object.keys($scope.menu.data.data[0]));
					}
				)
			};



			$scope.load()
		
	}])
	;
angular.module("FoddieApp")

	.controller("LoginController", ['$scope' , 'close', 'platos', 'price', '$http' 
		,function($scope, close, platos, price, $http){

		$scope.platos = platos;
		$scope.name = "";
		$scope.address = "";
		$scope.phone = "";
		$scope.comment = "";
		$scope.exito = false;
		$scope.fail = false;
		var platos_ids = [];

		$scope.checkOut = function(){
			platos.forEach(function(plato){
				platos_ids.push(plato.id);
			});

			var request = {platos: platos_ids, direccion : $scope.address,
							nombre : $scope.name, telefono : $scope.phone,
							empresa : "", observaciones : $scope.comment,
							precio : price, empresa : "" };
		
			$http({
				method : 'POST',
				url : 'http://www.restauranteplaza.co/pedido/',
				data : { data : request }

			}).then(function successCallback(response){
				$scope.exito = true;
			},function successCallback(response){
				$scope.fail = true;
			});
		};

	}]);
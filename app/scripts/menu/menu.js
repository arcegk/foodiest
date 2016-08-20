angular.module("FoddieApp")
	
	.controller("menuController", [ '$scope','$http', 'ModalService', 
		function($scope, $http, ModalService){

			$scope.price = 5000;
			$scope.menu = {};
			$scope.keys = {};
			$scope.cart = []
			$scope.cartIdes = []
			$scope.cartd = []
			$scope.showprice = false;


			$scope.addToCart = function(dish){
				$scope.showprice = true;
				$scope.cart.push(dish)
				for (var i = $scope.cartd.length - 1; i >= 0; i--) {
					if ($scope.cartd[i].tipo == dish.tipo){
						$scope.price = $scope.price - $scope.cartd[i].precio_extra; 
						$scope.cartIdes.splice($scope.cartIdes.indexOf($scope.cartd[i].id),1);
						$scope.cartd.splice(i,1);
						
					}
				}
				$scope.cartd.push(dish);
				$scope.cartIdes.push(dish.id);
				$scope.price = $scope.price + dish.precio_extra;
			};

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

			$scope.openModal = function(){
				if($scope.cartd.length == 0){
					ModalService.showModal({
						templateUrl : "views/confirmModal.html",
						controller : "ConfirmController",
						inputs : {content : "Por favor seleccione al menos un plato"}
					}).then(function(modal){
						modal.element.modal();
					});
				}else{
					ModalService.showModal({
				        templateUrl: "views/confirmMenuModal.html",
				        controller: "ConfirmMenuController",
				        inputs : { platos : $scope.cartd , price: $scope.price}
				      }).then(function(modal){
				      	modal.element.modal();
				      });
			  }
			};




			$scope.load()
		
	}])

		.controller("ConfirmMenuController", ['$scope' , 'platos', 'price' ,'ModalService',
			 function($scope, platos, price ,ModalService){

					$scope.data = platos;
					$scope.price = price;

					$scope.good = function(){
						ModalService.showModal({
							templateUrl: "views/loginModal.html",
							controller: "LoginController",
							inputs : {platos : platos, price : price}
						}).then(function(modal){
							modal.element.modal();
						});

					};

	}]);
	;
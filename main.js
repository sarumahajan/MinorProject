var Test = angular.module('onlineTest',['ngRoute']);     //module
Test.config(function ($routeProvider) {
	$routeProvider
	.when('/login',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'

	})
	.when('/',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})

	.when('/register',{
		templateUrl: 'pages/register.html',
		controller: 'RegisterController'
	})
	.when('/ce',{
		templateUrl: 'pages/ce.html',
		controller: 'CeController'
	})

})

Test.controller('mainController', function($scope,$location){				//mainController

      $scope.goToRegister = function() {
           console.log('Go to register');
          $location.url('register');
        }
				$scope.goToLogin = function() {
					 console.log('Go to home page')
					$location.url('login');
				}

})
Test.controller('loginController',function($scope,$location) {						//loginController
	$scope.goToRegister = function() {
			 console.log('Go to register');
			$location.url('register');
		}
})
Test.controller('RegisterController',function($scope,$location) {						//loginController
	$scope.goToRegister = function() {
		 console.log('Go to home page')
		$location.url('register');
	}
})

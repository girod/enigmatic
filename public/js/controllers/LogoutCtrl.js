angular.module('LogoutCtrl', ['MainCtrl']).controller('LogoutController', function($scope, $http, $location) {

	$scope.tagline = 'Logout scope !';	

    $http.post('/logout', $scope.User).
        success(function(data) {        	
			$scope.User.firstname = "";
			$scope.User.password = "";
		    $scope.User.connected = false;
            $location.path("/");
        }).error(function(err) {
            $scope.errorMessage = err;
        });


});
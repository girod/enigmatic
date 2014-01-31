angular.module('SignCtrl', []).controller('SignController', function($scope, $http, $location) {

	$scope.tagline = 'To the moon and back!';	
	$scope.User = {};

    $scope.register = function() {
        $http.post('/signin', $scope.User).
            success(function(data) {
            	console.log(data);
                //$location.path('/');
            }).error(function(err) {
            	console.log('ici');
                //$scope.errorMessage = err;
            });
    }
});
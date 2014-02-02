angular.module('SignCtrl', []).controller('SignController', function($scope, $http, $location) {

	$scope.tagline = 'To the moon and back!';	
	$scope.User = {};
    $scope.User.connected = false;
    $scope.register = function() {
        $http.post('/signin', $scope.User).
            success(function(data) {
            	//console.log(data);
                $scope.User.connected = true;
                console.log($scope.User);
            }).error(function(err) {
            	console.log('ici');
                $scope.errorMessage = err;
            });
    }
});
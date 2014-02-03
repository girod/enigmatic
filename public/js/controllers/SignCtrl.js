angular.module('SignCtrl', ['MainCtrl']).controller('SignController', function($scope, $http, $location) {

	$scope.tagline = '';	

    $scope.register = function() {
        $http.post('/signin', $scope.User).
            success(function(data) {
                console.log(data.connected);
                if (data.connected){
                    $scope.User.connected = true;
                    $scope.User.firstname = data.user.firstname;
                    $location.path("/");
                }    
                else{
                    console.log(data.message);
                    $scope.tagline = data.message;
                }
            }).error(function(err) {
                $scope.errorMessage = err;
            });
    }


});
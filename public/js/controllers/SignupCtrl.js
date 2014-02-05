angular.module('SignupCtrl', []).controller('SignupController', function($scope, $http, $location) {

	$scope.tagline = '';	
    
    $scope.register = function() {
        if ($scope.User.username && $scope.User.password && $scope.User.firstname && $scope.User.lastname){
            $http.post('/signup', $scope.User).
                success(function(data) {
                    if (data.connected){
                        $scope.User.connected = true;
                        $scope.User.firstname = data.user.firstname;
                        $location.path("/");
                    }    
                    else{
                        $scope.tagline = data.message;
                    }
                }).error(function(err) {
                    $scope.errorMessage = err;
                });
        }    
    }


});
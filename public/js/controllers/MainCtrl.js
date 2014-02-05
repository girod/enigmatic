angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Global',  function($scope, Global) {

	$scope.tagline = 'Main scope !';	
    $scope.User = {};
	Global.getSessions().success(function(data, status) {
        if (data.connected){
            $scope.User.connected = true;
            $scope.User.firstname = data.user.firstname;
        }    
        else{
            $scope.User.connected = false;
        }
    });    

}]);
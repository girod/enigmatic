angular.module('ContactCtrl', []).controller('ContactController', ['$scope', 'Global',  function($scope, Global) {

	$scope.tagline = 'To the moon and back!';	

	Global.getSessions().success(function(data, status) {
        if (data.connected){
            $scope.User.connected = true;
            $scope.User.firstname = data.user.firstname;
        }    
        else{
            $scope.User.connected = false;
            $scope.User = {};
        }
    });


}]);
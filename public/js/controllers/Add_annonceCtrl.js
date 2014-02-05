angular.module('Add_annonceCtrl', []).controller('Add_annonceController', ['$scope', 'Global',  function($scope, Global) {

	$scope.tagline = 'Ajout d\'une annonce!';	

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
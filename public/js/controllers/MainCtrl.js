angular.module('MainCtrl', []).controller('MainController', function($scope) {

	$scope.tagline = 'Main scope !';	
	$scope.User = {};
    $scope.User.connected = false;

});
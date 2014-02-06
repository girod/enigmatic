angular.module('Add_annonceCtrl', []).controller('Add_annonceController', ['$scope', '$http', '$location', 'Global',  function($scope, $http, $location, Global) {

	$scope.tagline = 'Ajout d\'une annonce!';	

	Global.getSessions().success(function(data, status) {
        if (data.connected){
            $scope.User.connected = true;
            $scope.User.firstname = data.user.firstname;
        }    
        else{
            $scope.User.connected = false;
        }
    });

    $scope.addannonce = function(){        
        if ($scope.User.firstname && $scope.User.lastname && $scope.Annonce.region 
            && $scope.Annonce.sujet && $scope.Annonce.comments){
                $http.post('/register_annonce', $scope.Annonce).
                    success(function(data){
                        if (data.connected){
                            $location.path("/");
                        }    
                        else{
                            $location.path("/auth");
                        }  
                    }).error(function(err) {
                        $scope.errorMessage = err;
                    });
        }
    }


}]);
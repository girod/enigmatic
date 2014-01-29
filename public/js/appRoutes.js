angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html'
		})

		.when('/signin', {
			templateUrl: 'views/signin.html',
			controller: 'SignController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})


	$locationProvider.html5Mode(true);

}]);
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

		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'SignupController'
		})

		.when('/logout', {		
			templateUrl: 'views/home.html',
			controller: 'LogoutController'
		})

		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})
		
		.when('/add_annonce', {
			templateUrl: 'views/add_annonce.html',
			controller: 'Add_annonceController'
		})

	$locationProvider.html5Mode(true);

}]);
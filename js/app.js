var app = angular.module("MPA", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: "MainController",
			templateUrl: "views/home.html"
		})
		.when('/audition', {
			controller: "MainController",
			templateUrl: "views/audition.html"
		})
		.when('/registration', {
			controller: "MainController",
			templateUrl: "views/registration.html"
		})
		.otherwise({
			redirectTo: '/'
		});
});
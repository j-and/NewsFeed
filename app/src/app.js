'use strict';

// // Declare app level module which depends on views, and components

angular.module('NewsFeed', [
	'NewsFeed.services',
	'NewsFeed.controllers',
	'ngRoute',
	'ngAnimate',
	'ngSanitize',
	'ui.bootstrap'
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when("/main", {
		templateUrl: "partials/drivers.html",
		controller: "alertController"
	}).otherwise({redirectTo: '/main'});
}]);
'use strict';

// Declare app level module which depends on views, and components

angular.module('NewsFeed', [
	'ngRoute',
	'ngAnimate',
	'ngSanitize',
	'ui.bootstrap',
	'ui.bootstrap.demo'
 ])
.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/', {
		controller  : 'mainPageCtrl',
		// templateUrl: 'src/mainPage/mainPage/mainPage.html'
		template:'<div>Hello</div>'
	});


	// $routeProvider.when('/newsfeed/searchResults', {
	// 	templateUrl: 'src/mainPage/searchResults/searchResults.html'
	// });
	//
	// $routeProvider.when('/newsfeed/fullNews', {
	// 	templateUrl: 'src/mainPage/fullNews/fullNews.html'
	// });
	//
	// //User
	// $routeProvider.when('/newsfeed/user/myNews', {
	// 	templateUrl: 'src/alerts/myNews/myNews.html'
	// });
	//
	// //Admin
	// $routeProvider.when('/newsfeed/admin/pendingNews', {
	// 	templateUrl: 'src/alerts/pendingNews/pendingNews.html'
	// });
	//
	// $routeProvider.when('/newsfeed/admin/usersList', {
	// 	templateUrl: 'src/alerts/usersList/usersList.html' //with features of admin
	// });

	//.otherwise({redirectTo: '/newsfeed'});
 }]);
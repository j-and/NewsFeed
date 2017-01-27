'use strict';

// Declare app level module which depends on views, and components

angular.module('NewsFeed', [
	'ngRoute',
	'ui.bootstrap'
 ])
	.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when("/newsfeed", {
		controller  : 'mainPageCtrl',
		 templateUrl: 'src/mainPage/mainPage/mainPage.html'
	});

	$routeProvider.when('/newsfeed/searchResults', {
		templateUrl: 'src/mainPage/searchResults/searchResults.html'
	});
	
	$routeProvider.when('/newsfeed/fullNews', {
		templateUrl: 'src/mainPage/fullNews/fullNews.html'
	});

	// //User
	$routeProvider.when('/newsfeed/user/myNews', {
		templateUrl: 'src/alerts/myNews/myNews.html'
	});

	//Admin
	$routeProvider.when('/newsfeed/admin/pendingNews', {
		templateUrl: 'src/alerts/pendingNews/pendingNews.html'
	});
	
	$routeProvider.when('/newsfeed/admin/usersList', {
		controller  : 'usersListCtrl',
		templateUrl: 'src/alerts/usersList/usersList.html' //with features of admin
	})

	.otherwise({redirectTo: '/newsfeed'});
 }]);
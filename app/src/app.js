'use strict';

// Declare app level module which depends on views, and components
angular.module('NewsFeed', [
	'ngRoute',
	'ui.bootstrap'
])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when("/newsfeed", {
			controller: 'mainPageCtrl',
			templateUrl: 'src/mainPage/mainPage/mainPage.html'
		});

		$routeProvider.when("/newsfeed/myNews", {
			controller: 'mainPageCtrl',
			templateUrl: 'src/mainPage/mainPage/mainPage.html'
		});
		
		$routeProvider.when('/newsfeed/fullNews', {
			controller: 'fullNewsCtrl',
			templateUrl: 'src/mainPage/fullNews/fullNews.html'
		});
		
		$routeProvider.when('/newsfeed/usersList', {
			controller: 'usersListCtrl',
			templateUrl: 'src/alerts/usersList/usersList.html' //with features of admin
		});

		$routeProvider.when('/newsfeed/searchResults/news', {
			controller: 'mainPageCtrl',
			templateUrl: 'src/mainPage/mainPage/mainPage.html'
		});

		$routeProvider.when('/newsfeed/searchResults/myNews', {
			controller: 'mainPageCtrl',
			templateUrl: 'src/mainPage/mainPage/mainPage.html'
		})
			.otherwise({redirectTo: '/newsfeed'});
	}]);
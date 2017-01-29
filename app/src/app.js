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

		$routeProvider.when('/newsfeed/fullNews', {
			templateUrl: 'src/mainPage/fullNews/fullNews.html'
		});
		
		$routeProvider.when('/newsfeed/usersList', {
			controller: 'usersListCtrl',
			templateUrl: 'src/alerts/usersList/usersList.html' //with features of admin
		})

			.otherwise({redirectTo: '/newsfeed'});
	}]);
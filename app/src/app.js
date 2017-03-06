'use strict';

angular.module('NewsFeed', [
	'ngRoute',
	'ui.bootstrap'
])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when("/newsfeed", {
			controller: 'mainPageCtrl',
			templateUrl: 'src/mainPage/mainPage/mainPage.html'
		});

		$routeProvider.when('/newsfeed/fullNews/:id', {
			controller: 'fullNewsCtrl',
			templateUrl: 'src/mainPage/fullNews/fullNews.html'
		});

		$routeProvider.when('/newsfeed/usersList', {
			controller: 'usersListCtrl',
			templateUrl: 'src/usersList/usersList.html'
		});

		$routeProvider.when('/newsfeed/error', {
			controller: 'errorCtrl',
			templateUrl: 'src/error/error.html'
		})

			.otherwise({redirectTo: '/newsfeed'});
	}]);
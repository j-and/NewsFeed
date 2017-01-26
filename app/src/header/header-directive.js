(function () {
	'use strict';
	angular.module('NewsFeed')
		.directive('header', function () {
			return {
				templateUrl: '/src/header/header.html',
				controller: 'headerCtrl'
			};
		});
})();


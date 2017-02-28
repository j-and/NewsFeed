(function () {
	'use strict';
	angular.module('NewsFeed')
		.directive('pagination', function () {
			return {
				templateUrl: '/src/pagination/pagination.html'
			};
		});
})();
(function () {
	'use strict';
	angular.module('NewsFeed')
		.directive('searchdropdown', function () {
			return {
				templateUrl: '/src/header/searchDropdown/searchDropdown.html'
			};
		});
})();
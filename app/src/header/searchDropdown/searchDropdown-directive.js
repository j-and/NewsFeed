(function () {
	'use strict';
	angular.module('NewsFeed')
		.directive('searchdropdown', function () {
			return {
				controller:'searchdropdownCtrl',
				templateUrl: '/src/header/searchDropdown/searchDropdown.html'
			};
		});
})();
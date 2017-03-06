(function () {
	'use strict';
	angular.module('NewsFeed')
		.directive('pagination', pagination);
	function pagination() {
		return {
			controller: 'paginationCtrl',
			controllerAs: 'pagination',
			templateUrl: '/src/pagination/pagination.html'
		};
	}
})();
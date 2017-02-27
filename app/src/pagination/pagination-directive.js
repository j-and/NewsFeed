(function () {
	'use strict';
	angular.module('NewsFeed')
		.directive('pagination', function () {
			return {
				templateUrl: '/src/pagination/pagination.html'
			};
		})
		.controller('paginationCtrl',['$scope',function ($scope) {
		//	$scope.currentPage=5;
		}])
})();
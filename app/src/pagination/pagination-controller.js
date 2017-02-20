(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('paginationCtrl',['newsItemsService','$scope','$log', function (newsItemsService,$scope, $log) {
		// 	$scope.items = [];
		// 	$scope.currentPage = 1;
		// 	$scope.itemsPerPage = 3;
		// 	$scope.maxSize = 3;
		// 	$scope.totalItems = 13;
		// 	$scope.newsItems = newsItemsService.getNewsItemsArray();
		// 	for(var i = 0; i < 13; i++){
		// 		$scope.items[i] = $scope.newsItems[i]
		// 	}
		// }])
	
		// .directive('pagination', function () {
		// 	return {
		// 		templateUrl: '/src/pagination/pagination.html'
		// 	};
			}])
})();



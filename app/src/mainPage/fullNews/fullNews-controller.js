(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('fullNewsCtrl', ['newsItemsService', '$scope', function (newsItemsService, $scope) {

			$scope.newsItems = newsItemsService.getNewsItemsArray()[0];
		}]);
})();


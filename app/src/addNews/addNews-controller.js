(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('addNewsButtonCtrl', ['addIdService','newsItemsService', '$scope', '$uibModal', function (addIdService,newsItemsService, $scope, $uibModal) {

			$scope.role = 'user';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			$scope.newsItems = newsItemsService.getNewsItemsArray();

			$scope.openAddNewsModal = function () {
				var index = 0
				$scope.newsItem = {
						author: $scope.newsItems[index].author || '',
						summary: $scope.newsItems[index].summary,
						tag: $scope.newsItems[index].tag,
						text: $scope.newsItems[index].text,
						theme: $scope.newsItems[index].theme,
						title: $scope.newsItems[index].title
					} || {};

				$uibModal.open({
					templateUrl: '/src/addNews/addNewsModal/addNewsModal.html',
					controller: 'addNewsModalCtrl',
					controllerAs: 'addNews',
					resolve: {
						newsItem: function () {
							return $scope.newsItem;
						}
					}
				});
			}

		}]);
})();



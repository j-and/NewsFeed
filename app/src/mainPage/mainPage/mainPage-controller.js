(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['addIdService', 'newsItemsService', '$scope', '$uibModal', function (addIdService, newsItemsService, $scope, $uibModal) {

			$scope.role = 'user';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			$scope.newsItems = newsItemsService.getNewsItemsArray();

			$scope.openEditNewsModal = function (index) {
				$scope.newsItem = {
						author: $scope.newsItems[index].author || '',
						summary: $scope.newsItems[index].summary,
						tag: $scope.newsItems[index].tag,
						text: $scope.newsItems[index].text,
						theme: $scope.newsItems[index].theme,
						title: $scope.newsItems[index].title
					} || {};
				$uibModal.open({
					templateUrl: '/src/alerts/deleteNews/editNewsModal/editNewsModal.html',
					controller: 'editNewsModalCtrl',
					controllerAs: 'editNews', resolve: {
						newsItem: function () {
							return $scope.newsItem;
						}
					}
				})
			};


			$scope.openDeleteNewsModal = function (index) {
				var modalInstance = $uibModal.open({
					templateUrl: '/src/alerts/deleteNews/deleteNewsModal/deleteNewsModal.html',
					controller: 'deleteNewsModalCtrl',
					controllerAs: 'deleteNews'
				});

				modalInstance.result.then(function (param) {
					if (param) {
						$scope.newsItems[index].deleted = true;
						newsItemsService.setNewsItemsArray(JSON.stringify($scope.newsItems));
					}
				});
			};
		}])
})();



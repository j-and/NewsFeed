(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('fullNewsCtrl', ['newsItemsService', '$uibModal', '$scope', function (newsItemsService, $uibModal, $scope) {
			$scope.role = 'user';
			$scope.index = location.toString().lastIndexOf('/');
			$scope.id = location.toString().substr($scope.index + 10);
			$scope.newsItem = newsItemsService.getNewsItemsArray()[$scope.id];
			$scope.newsItems = newsItemsService.getNewsItemsArray();

			$scope.openDeleteNewsModal = function (index) {

				var modalInstance = $uibModal.open({
					templateUrl: '/src/news/deleteNewsModal/deleteNewsModal.html',
					controller: 'deleteNewsModalCtrl',
					controllerAs: 'deleteNews'
				});

				modalInstance.result.then(function (param) {
					if (param) {
						$scope.newsItem.deleted = true;
						window.location = ('http://localhost:8000/?#!/newsfeed');
					}
				});
			};

			$scope.openEditNewsModal = function () {
				var id = $scope.newsItem.id;
				$scope.newsItem = {
						author: $scope.newsItems[id].author,
						date: $scope.newsItems[id].date,
						deleted: 'false',
						id: $scope.newsItems[id].id,
						summary: $scope.newsItems[id].summary,
						tag: $scope.newsItems[id].tag,
						text: $scope.newsItems[id].text,
						title: $scope.newsItems[id].title
					} || {};
				$uibModal.open({
					templateUrl: '/src/news/editNewsModal/editNewsModal.html',
					controller: 'editNewsModalCtrl',
					controllerAs: 'editNews',
					resolve: {
						newsItem: function () {
							return $scope.newsItem;
						},
						index: function () {
							return id;
						}
					}
				})
			};
		}])


})();


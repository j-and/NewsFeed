(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('fullNewsCtrl', ['newsItemsService','$uibModal', '$scope', function (newsItemsService, $uibModal,$scope) {
			$scope.role='user';
			$scope.index=location.toString().lastIndexOf('/');
			$scope.id=location.toString().substr($scope.index+10);
			$scope.newsItems = newsItemsService.getNewsItemsArray()[$scope.id];

			$scope.deleteNewsItem = function (event) {
				$scope.index = $(event.target).attr("id");
				console.log('$(event.target).attr("id")+'+$(event.target).attr("id"));
				newsItemsService.deleteNewsItem($scope.newsItems, $scope.index)
			};

			$scope.openEditPendingNewsModal = function () {
				$uibModal.open({
					templateUrl: '/src/alerts/deleteNews/editPendingNewsModal/editPendingNewsModal.html',
					controller: 'editPendingNewsModalCtrl',
					controllerAs: 'editPendingNews'
				})
			};
		}])


})();


(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('fullNewsCtrl', ['newsItemsService', '$uibModal', '$scope', function (newsItemsService, $uibModal, $scope) {
			$scope.role = 'user';
			$scope.index = location.toString().lastIndexOf('/');
			$scope.id = location.toString().substr($scope.index + 10);
			$scope.newsItem = newsItemsService.getNewsItemsArray()[$scope.id];
			$scope.location;

			$scope.openDeleteNewsModal = function (index) {

				var modalInstance = $uibModal.open({
					templateUrl: '/src/alerts/deleteNews/deleteNewsModal/deleteNewsModal.html',
					controller: 'deleteNewsModalCtrl',
					controllerAs: 'deleteNews'
				});

				modalInstance.result.then(function (param) {
					if (param) {
						$scope.newsItem.deleted = true;
						location = ('http://localhost:8000/?#!/newsfeed');
					}
				});
			};

			// $scope.openEditNewsModal = function () {
			// 	$uibModal.open({
			// 		templateUrl: '/src/alerts/deleteNews/editNewsModal/editNewsModal.html',
			// 		controller: 'editNewsModalCtrl',
			// 		controllerAs: 'editNews'
			// 	})
			// };

			$scope.openAddNewsModal = function () {
					$uibModal.open({
						templateUrl: '/src/addNews/addNewsModal/addNewsModal.html',
						controller: 'addNewsModalCtrl',
						controllerAs: 'addNews'
					})
				};


		}])


})();


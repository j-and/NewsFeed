(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('addNewsButtonCtrl', ['addIdService','newsItemsService', '$scope', '$uibModal', function (addIdService,newsItemsService, $scope, $uibModal) {

			$scope.role = 'user';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			$scope.newsItems = newsItemsService.getNewsItemsArray();

			$scope.openAddNewsModal = function () {

				$uibModal.open({
					templateUrl: '/src/addNews/addNewsModal/addNewsModal.html',
					controller: 'addNewsModalCtrl',
					controllerAs: 'addNews'
				});
			}
		}]);
})();



(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('addNewsButtonCtrl', ['addIdService', 'usersService', 'newsItemsService', '$scope', '$uibModal', function (addIdService, usersService, newsItemsService, $scope, $uibModal) {
			$scope.usersService = usersService;
			$scope.newsItems = newsItemsService.getNewsItemsArray();

			$scope.openAddNewsModal = function () {
				$uibModal.open({
					templateUrl: 'src/news/addNews/addNewsModal/addNewsModal.html',
					controller: 'addNewsModalCtrl',
					controllerAs: 'addNews'
				});
			};

			$scope.$watch('usersService.getRole()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.role = usersService.getRole();
				}
			}, true);
		}]);
})();



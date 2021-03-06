(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('addNewsButtonCtrl', ['usersService', 'newsItemsService', '$scope', '$uibModal', function (usersService, newsItemsService, $scope, $uibModal) {
			$scope.usersService = usersService;
			$scope.newsItems = newsItemsService.getNewsItemsArray();

			/**
			 * @ngdoc function
			 * @name openAddNewsModal
			 * @description open add news modal
			 */
			$scope.openAddNewsModal = function () {
				$uibModal.open({
					templateUrl: 'src/news/addNews/addNewsModal/addNewsModal.html',
					controller: 'addNewsModalCtrl',
					controllerAs: 'addNews'
				});
			};

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description open add news modal
			 * @param('usersService.getRole()', function (newValue, oldValue, $scope
			 */
			$scope.$watch('usersService.getRole()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.role = usersService.getRole();
				}
			}, true);
		}]);
})();



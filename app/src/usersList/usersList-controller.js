(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('usersListCtrl', ['searchService', 'usersService', '$scope', '$uibModal', function (searchService, usersService, $scope, $uibModal) {

			$scope.usersService = usersService;
			
			$scope.users = usersService.getUsersArray();


			$scope.addPendingUser = function (index) {
				$scope.user = usersService.getUsersArray()[index];
				$scope.user.status = 'approved';
				document.getElementById(index).setAttribute('class', 'deleted');
				usersService.addUser($scope.user);
			};

			$scope.openDeleteUserModal = function (index) {
				var modalInstance = $uibModal.open({
					templateUrl: '/src/usersList/deleteUserModal/deleteUserModal.html',
					controller: 'deleteUserModalCtrl',
					controllerAs: 'deleteUser',
					resolve: {
						index: function () {
							return $scope.index;
						}
					}
				});

				modalInstance.result.then(function () {
					$scope.index = index;
					usersService.deleteUser(usersService.getUsersArray(), $scope.index);
				});
			};

			$scope.$watch('usersService.getUsersArray()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.users = usersService.getUsersArray();
				}
			}, true);

		}]);
})();

(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('usersListCtrl', ['searchService', 'usersService', '$scope', '$uibModal', function (searchService, usersService, $scope, $uibModal) {
			$scope.role = usersService.getRole();
			$scope.usersService = usersService;

			//$scope.users = usersService.getUsersArray();
			$scope.users1 = usersService.getUsersArray();
			$scope.users = [];

			if ($scope.users1.length) {
				for (var i = 0; i < $scope.users1.length; i++) {
					if ($scope.users1[i].deleted != true) {
						$scope.users.push($scope.users1[i])
					}
				}
				usersService.setUsersArray(JSON.stringify($scope.users))
			}

			/**
			 * @ngdoc function
			 * @name addPendingUser
			 * @description set users's status to 'user'
			 * @param (index)
			 */
			$scope.addPendingUser = function (index) {
				$scope.user = usersService.getUsersArray()[index];
				$scope.user.status = 'approved';
				usersService.addUser($scope.user);
			};

			/**
			 * @ngdoc function
			 * @name openDeleteUserModal
			 * @description opens delete user modal
			 * @param (index)
			 */
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
					$scope.user = usersService.getUsersArray()[index];
					$scope.user.deleted = 'true';
					usersService.deleteUser($scope.user, $scope.index);
				});
			};

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description set user's role if it's changed
			 * @param ('usersService.getUsersArray()', function (newValue, oldValue, $scope)
			 */
			$scope.$watch('usersService.getUsersArray()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.users = usersService.getUsersArray();
				}
			}, true);

		}]);
})();

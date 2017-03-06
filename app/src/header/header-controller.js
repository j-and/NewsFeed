(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['usersService', '$scope', '$uibModal', function (usersService, $scope, $uibModal) {
			$scope.usersService = usersService;
			$scope.role = usersService.getRole();
			/**
			 * @ngdoc function
			 * @name openLoginModal
			 * @description opens login modal window
			 */
			$scope.openLoginModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/loginModal/loginModal.html',
					controller: 'loginModalCtrl',
					controllerAs: 'profile'
				});
			};

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description set  users role
			 * @param (newValue, oldValue, $scope)
			 */
			$scope.$watch('usersService.getRole()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.role = usersService.getRole();
				}
			}, true);

			/**
			 * @ngdoc function
			 * @name signOut
			 * @description set users role to ''
			 */
			$scope.signOut = function () {
				usersService.setRole('');
				$scope.role = usersService.getRole();
			};
		}]);
})
();

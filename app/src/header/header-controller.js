(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['usersService', '$scope', '$uibModal', function (usersService, $scope, $uibModal) {

			$scope.usersService = usersService;
			
			$scope.openLoginModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/loginModal/loginModal.html',
					controller: 'loginModalCtrl',
					controllerAs: 'profile'
				});
			};
			$scope.openEditProfileModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/editProfileModal/editProfileModal.html',
					controller: 'editProfileModalCtrl',
					controllerAs: 'editProfile'
				})
			};

			$scope.$watch('usersService.getRole()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.role = usersService.getRole();
				}
			}, true);

			$scope.signOut = function () {
				usersService.setRole('');
				$scope.role = usersService.getRole();
			};
		}]);
})
();

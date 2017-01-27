(function () {
	'use strict';
	angular.module('NewsFeed')
		.controller('headerCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
			$scope.openProfileModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/profileModal/profileModal.html',
					controller: 'profileModalCtrl'
				})
			};
			$scope.openEditProfileModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/editProfileModal/editProfileModal.html',
					controller: 'editProfileModalCtrl'
				})
			}
		}]);
})();

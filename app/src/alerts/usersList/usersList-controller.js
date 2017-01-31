(function () {
'use strict';

angular.module('NewsFeed')
	.controller('usersListCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
		$scope.openProfileModal = function () {
			$uibModal.open({
				templateUrl: '/src/alerts/usersList/deleteUserModal/deleteUserModal.html',
				controller: 'deleteUserModalCtrl',
				controllerAs:'deleteUser'
			})
		};
		//TO DO
		$scope.addPendingUser = function () {
			alert('TODO: add Pending User');
		};
		//TO DO
		$scope.searchUser = function () {
			alert('TODO: Search User');
		};
	}]);
})();


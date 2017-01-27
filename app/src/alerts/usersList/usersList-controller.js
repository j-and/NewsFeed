(function () {
'use strict';

angular.module('NewsFeed')
	.controller('usersListCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
		$scope.openProfileModal = function () {
			$uibModal.open({
				templateUrl: '/src/alerts/usersList/deleteUserModal/deleteUserModal.html',
				controller: 'deleteUserModalCtrl'
			})
		}
	}]);
})();


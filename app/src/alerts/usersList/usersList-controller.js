(function () {
'use strict';

angular.module('NewsFeed')
	.controller('usersListCtrl', ['searchService','usersService','$scope', '$uibModal', function (searchService,usersService,$scope, $uibModal) {

		$scope.openProfileModal = function () {
			$uibModal.open({
				templateUrl: '/src/alerts/usersList/deleteUserModal/deleteUserModal.html',
				controller: 'deleteUserModalCtrl',
				controllerAs:'deleteUser'
			})
		};
		$scope.users = usersService.getUsersArray();
		$scope.searchResults = false;

		var usersNamesdArray = [];
		var matchesTitleArrayIndex = [];
		for (var i = 0; i < $scope.users.length; i++) {
			usersNamesdArray.push($scope.users[i].name);
		}

//TO DO
		$scope.addPendingUser = function (user) {
			alert('TODO: add Pending User');
			
		};
		
		$scope.searchUser = function () {
			searchService.searchEntriesInString(usersNamesdArray, 'searchUserInput');
			$scope.searchResults = searchService.showSearchResults('searchUserInput');
			$scope.records=searchService.getRecords();
			$scope.users=usersService.getUsersArray();
		};

		
		
		$scope.hideDropdown = function () {
			// if (event.target.nodeName != 'INPUT') {
			$scope.searchResults = false;
			// }
		};

	}]);
})();


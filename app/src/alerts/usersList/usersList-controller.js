(function () {
'use strict';

angular.module('NewsFeed')
	.controller('usersListCtrl', ['searchService','usersService','$scope', '$uibModal', function (searchService,usersService,$scope, $uibModal) {

		// $scope.openDeleteUserModal = function () {
		// var modalInstance=	$uibModal.open({
		// 		templateUrl: '/src/alerts/usersList/deleteUserModal/deleteUserModal.html',
		// 		controller: 'deleteUserModalCtrl',
		// 		controllerAs: 'deleteUser'
		// 	}).result.finally($scope.deleteUser());
		// };
		
		//$scope.users=usersService.usersArrayDefault;
		$scope.users = usersService.getUsersArray();
		$scope.searchResults = false;

		var usersNamesdArray = [];
		for (var i = 0; i < $scope.users.length; i++) {
			usersNamesdArray.push($scope.users[i].name);
		}

//TO DO
		$scope.addPendingUser = function (user) {
			alert('TODO: add Pending User');
		};
		
		$scope.searchUser = function () {
			searchService.searchEntriesInString(usersNamesdArray, 'searchInput');
			$scope.searchResults = searchService.showSearchResults('searchInput');
			$scope.records=searchService.getRecords();
			$scope.users=usersService.getUsersArray();
		};
		
		$scope.hideDropdown = function () {
			// if (event.target.nodeName != 'INPUT') {
			$scope.searchResults = false;
			// }
		};

		$scope.deleteUser = function (event) {
			$scope.index = $(event.target).attr("id");
			console.log('$scope.index+'+$scope.index);
			console.log('$scope.usersArray+'+$scope.users);
			usersService.deleteUser($scope.users, $scope.index);
		};


	}]);
})();


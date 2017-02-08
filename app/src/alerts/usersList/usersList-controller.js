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

		$scope.users =usersService.usersArray;
		$scope.searchResults = false;

		var usersNamesdArray = [];
		var matchesTitleArrayIndex = [];
		for (var i = 0; i < usersService.usersArray.length; i++) {
			usersNamesdArray.push(usersService.usersArray[i].name);
		}

//TO DO
		$scope.addPendingUser = function (user) {
			alert('TODO: add Pending User');
			// var newsItemAuthor = document.getElementById('newsItemTitle');

			// var newsItem = {
			// 	author: newsItemAuthor.value,
			// };
			usersService.addUser(user);
			searchService.searchEntriesInString();
		};

		//TO DO
		$scope.searchUser = function () {
			searchService.searchEntriesInString(usersNamesdArray, 'searchUserInput');
			$scope.searchResults = searchService.showSearchResults('searchUserInput');
			$scope.records=searchService.getRecords();
		};

		$scope.hideDropdown = function () {
			// if (event.target.nodeName != 'INPUT') {
			$scope.searchResults = false;
			// }
		};

	}]);
})();


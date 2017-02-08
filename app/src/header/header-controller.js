(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['searchService', 'newsItemsService', '$scope', '$uibModal', function (searchService, newsItemsService, $scope, $uibModal) {
			//Header view depending on the alerts and role

			$scope.alerts = true;
			$scope.role = 'admin';
			// $scope.records;

			$scope.searchResults = false;

			$scope.openProfileModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/profileModal/profileModal.html',
					controller: 'profileModalCtrl',
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

			var titlesdArray = [];
			var matchesTitleArrayIndex = [];
			for (var i = 0; i < newsItemsService.newsItemsArray.length; i++) {
				titlesdArray.push(newsItemsService.newsItemsArray[i].title);
			}

			$scope.searchTitle = function () {
				searchService.searchEntriesInString(titlesdArray, 'searchInput');
				$scope.searchResults = searchService.showSearchResults('searchInput');
				$scope.records = searchService.getRecords();
			};

			$scope.hideDropdown = function () {
				// if (event.target.nodeName != 'INPUT') {
				$scope.searchResults = false;
				// }
			};

			//TO DO
			$scope.selectFilter = function () {
				event.stopPropagation();
				alert('TODO: selected filter=');
			};

			//TO DO
			$scope.search = function () {
				alert('TODO: Search');
			};
			//TO DO
			$scope.signOut = function () {
				alert('TODO: signOut');
			};
			//TO DO
			$scope.goToNewsPage = function () {
				alert('TODO: go To News Page');
			};
			//TO DO
			$scope.goToMyNewsPage = function () {
				alert('TODO: go To My News Page');
			};
		}]);
})();

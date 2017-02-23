(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['searchService', 'newsItemsService', '$scope', '$uibModal', 'Query', function (searchService, newsItemsService, $scope, $uibModal, Query) {
			//Header view depending on the alerts and role
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

			$scope.alerts = true;
			$scope.role = 'user';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			$scope.newsItems = newsItemsService.getNewsItemsArray();
			$scope.searchResults = false;

			var authorIsChecked = false;
			var dateIsChecked = false;
			var tagIsChecked = false;
			var currentPage=1;

			$scope.searchQuery = function (authorIsChecked, dateIsChecked, tagIsChecked) {
				searchService.newArray.length = 0;
				$scope.query = document.getElementById('searchInput').value;
				searchService.search(authorIsChecked, dateIsChecked, tagIsChecked, $scope.newsItems, $scope.query,currentPage);
				$scope.searchResults = searchService.showSearchResults('searchInput');
				$scope.records = searchService.getRecords();
			};

			$scope.hideDropdown = function () {
				// if (event.target.nodeName != 'INPUT') {
				$scope.searchResults = false;
				// }
			};


			$scope.selectFilter = function (event) {
				event.stopPropagation();
				$scope.filter = event.target.value;
				if (event.target.checked == true) {
					if ($scope.filter == 'Author') {
						authorIsChecked = true;
					}
					if ($scope.filter == 'Date') {
						dateIsChecked = true;
					}
					if ($scope.filter == 'Tag') {
						tagIsChecked = true;
					}
					event.target.setAttribute('checked', 'false');
				}
				else {
					event.target.setAttribute('checked', 'true');
					if ($scope.filter == 'Author') {
						authorIsChecked = false;
					}
					if ($scope.filter == 'Date') {
						dateIsChecked = false;
					}
					if ($scope.filter == 'Tag') {
						tagIsChecked = false;
					}
				}
				$scope.searchQuery(authorIsChecked, dateIsChecked, tagIsChecked);

			};

//TO DO
			$scope.signOut = function () {
				alert('TODO: signOut');
			};

		}])
	;
})
();

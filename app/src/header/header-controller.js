(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['searchService', 'newsItemsService', '$scope', '$uibModal', function (searchService, newsItemsService, $scope, $uibModal) {
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

			var authorsArray = [];
			var datesArray = [];
			var tagsArray = [];
			var titlesArray = [];
			for (var i = 0; i < $scope.newsItems.length; i++) {
				authorsArray.push($scope.newsItems[i].author);
				datesArray.push($scope.newsItems[i].date);
				tagsArray.push($scope.newsItems[i].tag);
				titlesArray.push($scope.newsItems[i].title);
			}

			$scope.searchQuery = function (array) {

				$scope.array = array || authorsArray;
				$scope.query = document.getElementById('searchInput').value;
				$scope.records = $scope.array;
				$scope.searchResults = searchService.showSearchResults('searchInput');
			};

			$scope.hideDropdown = function () {
				// if (event.target.nodeName != 'INPUT') {
				$scope.searchResults = false;
				// }
			};

			$scope.selectFilter = function (event) {
				event.stopPropagation();
				$scope.filter = event.target.value;
				if ($scope.filter == 'Author') {
					$scope.searchQuery(authorsArray);
				}
				else if ($scope.filter == 'Date') {
					$scope.searchQuery(datesArray);
				}
				else if ($scope.filter == 'Tag') {
					$scope.searchQuery(tagsArray);
				}
			};

			//TO DO
			$scope.signOut = function () {
				alert('TODO: signOut');
			};

		}]);
})();

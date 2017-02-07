(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['newsItemsService', '$scope', '$uibModal', function (newsItemsService, $scope, $uibModal) {
			//Header view depending on the alerts and role

			$scope.alerts = true;
			$scope.role = 'admin';
			$scope.searchInput = "";
			$scope.searchResults = false;
			$scope.author = newsItemsService.newsItemsArray[0].author;

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
			$scope.url = "/#!/newsfeed/fullNews";

			$scope.showSearchResults = function (searchInput) {
				event.stopPropagation();
				if (searchInput != '') {
					return $scope.searchResults = true;
				}
			};

			var titlesdArray = [];
			var matchesTitleArrayIndex = [];
			
			$scope.unique = function (array) {
				var searchResultsArray = [];
				var obj = {};
				for (var i = 0; i < array.length; i++) {
					var str = array[i];
					obj[str] = true;
				}
				for (var k = 0; k < Object.keys(obj).length; k++) {
					var j = Object.keys(obj)[k];
					searchResultsArray.push(titlesdArray[j])
				}
				$scope.records = searchResultsArray;
				array.length = 0;
			};

			$scope.searchTitle = function () {
				for (var i = 0; i < newsItemsService.newsItemsArray.length; i++) {
				titlesdArray.push(newsItemsService.newsItemsArray[i].title);
			}
				for (var i = 0; i < titlesdArray.length; i++) {
					for (var j = 0; j < titlesdArray[i].length + 1; j++) {
						for (var k = 0; k < titlesdArray[i].length; k++) {
							if (this.searchInput == titlesdArray[i].substr(k, j)) {
								matchesTitleArrayIndex.push(i);
							}
						}
					}
				}
				$scope.unique(matchesTitleArrayIndex);
				$scope.showSearchResults(this.searchInput);
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

(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
			//Header view depending on the alerts and role

			$scope.alerts = true;
			$scope.role = 'admin';
			$scope.searchInput = "";
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

			$scope.showSearchResults = function (searchInput) {
				if (searchInput != '') {
					return $scope.searchResults = true;
				}
			};


			//Typeahead
			$scope.news = [
				{title: "1Title1", author: "John Doe"},
				{title: "1Title10", author: "John Doe"},
				{title: "2Title100", author: "John Doe"},
				{title: "2Title10000", author: "John Doe"},
				{title: "2Title10001"}
			];

			var typeaheadArray = [];
			var matchesTitleArrayIndex = [];

			for (var i = 0; i < $scope.news.length; i++) {
				typeaheadArray.push($scope.news[i].title);
			}

			$scope.unique = function (array) {
				var searchResultsArray = [];
				var obj = {};
				for (var i = 0; i < array.length; i++) {
					var str = array[i];
					obj[str] = true;
				}
				for (var k = 0; k < Object.keys(obj).length; k++) {
					var j = Object.keys(obj)[k];
					searchResultsArray.push(typeaheadArray[j])
				}
				$scope.searchInput0 = searchResultsArray[0];
				$scope.searchInput1 = searchResultsArray[1];
				$scope.searchInput2 = searchResultsArray[2];
				array.length = 0;

			};

			$scope.searchTitle = function () {
				for (var i = 0; i < typeaheadArray.length; i++) {
					for (var j = 0; j < typeaheadArray[i].length + 1; j++) {
						for (var k = 0; k < typeaheadArray[i].length ; k++) {
						if (this.searchInput == typeaheadArray[i].substr(k, j)) {
							matchesTitleArrayIndex.push(i);
						}
					 }
				}
				}
				$scope.unique(matchesTitleArrayIndex);
				$scope.showSearchResults(this.searchInput);
			};


			$scope.hideDropdown = function () {
				if (event.target.nodeName != 'INPUT') {
					$scope.searchResults = false;
				}
			};


			//TO DO
			$scope.selectFilter = function () {
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

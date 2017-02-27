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
			var currentPage = 1;

		//	searchService.setDataArray(true,true,true, newsItemsService.getNewsItemsArray());

			$scope.searchQuery = function () {
				$scope.query = document.getElementById('searchInput').value;
				$scope.searchResults = searchService.showSearchResults('searchInput');
			// 	//searchService.search(authorIsChecked, dateIsChecked, tagIsChecked, newsItemsService.getNewsItemsArray(), $scope.query)
			// 	//$scope.records =searchService.search(, newsItemsService.getNewsItemsArray(), $scope.query).a;
			// 	//$scope.records = searchService.getRecords();
			 };



			$scope.selectFilter = function (event) {
				event.stopPropagation();

				$scope.filter = event.target.value;
				if (event.target.checked == true) {
					if ($scope.filter == 'Author') {
						$scope.authorIsChecked = true;
					}
					if ($scope.filter == 'Date') {
						$scope.dateIsChecked = true;
					}
					if ($scope.filter == 'Tag') {
						$scope.tagIsChecked = true;
					}
					event.target.setAttribute('checked', 'false');
				}
				else {
					event.target.setAttribute('checked', 'true');
					if ($scope.filter == 'Author') {
						$scope.authorIsChecked = false;
					}
					if ($scope.filter == 'Date') {
						$scope.dateIsChecked = false;
					}
					if ($scope.filter == 'Tag') {
						$scope.tagIsChecked = false;
					}
				}
				$scope.searchQuery();
				searchService.setSelectedFilters($scope.authorIsChecked, $scope.dateIsChecked, $scope.tagIsChecked);
				$scope.authorIsChecked = searchService.getSelectedFilters().authorIsChecked;
				$scope.dateIsChecked = searchService.getSelectedFilters().dateIsChecked;
				$scope.tagIsChecked = searchService.getSelectedFilters().tagIsChecked;

				$scope.dataArray=searchService.setDataArray($scope.authorIsChecked, $scope.dateIsChecked, $scope.tagIsChecked, newsItemsService.getNewsItemsArray());

				searchService.search($scope.dataArray,newsItemsService.getNewsItemsArray(),$scope.query);

				//$scope.records =searchService.search($scope.dataArray, newsItemsService.getNewsItemsArray(), $scope.query).a;
				$scope.records =searchService.getRecords();

			};
			$scope.hideDropdown = function () {
				// if (event.target.nodeName != 'INPUT') {
				$scope.searchResults = false;
				// }
			};
//TO DO
			$scope.signOut = function () {
				alert('TODO: signOut');
			};

		}])
	;
})
();

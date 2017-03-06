(function () {
	'use strict';
	angular.module('NewsFeed')
		.controller('searchdropdownCtrl', ['searchService', 'newsItemsService', '$scope', function (searchService, newsItemsService, $scope) {
			$scope.searchQuery = {
				query: '',
				authorIsChecked: false,
				dateIsChecked: false,
				tagIsChecked: false
			};

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description filters records in dropdown and newsitems on page
			 * @param {object} searchQuery
			 * @param {object} function (newValue, oldValue, $scope)
			 */
			$scope.$watch('searchQuery', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.dataArray = searchService.setDataArray($scope.searchQuery, newsItemsService.getNewsItemsArray());
					$scope.records = searchService.search(searchService.getNewArray(), newsItemsService.getNewsItemsArray(), $scope.searchQuery.query).records;
					$scope.searchResults = searchService.search(searchService.getNewArray(), newsItemsService.getNewsItemsArray(), $scope.searchQuery.query).newsItems;
					searchService.setSearchResultsArray($scope.searchResults);
					searchService.setSearchQuery($scope.searchQuery);
					$scope.searchResults = searchService.showSearchResults();
				}
			}, true);

			$scope.searchResults = false;

			/**
			 * @ngdoc function
			 * @name hideDropdownh
			 * @description hides dropdown
			 */
			$scope.hideDropdown = function () {
				$scope.searchResults = false;
			};
		}]);
})();
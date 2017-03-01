(function () {
	'use strict';
	angular.module('NewsFeed')
		.controller('searchdropdownCtrl', ['searchService', 'newsItemsService', '$scope', function (searchService, newsItemsService, $scope) {
			$scope.Query = {
				query: '',
				authorIsChecked: false,
				dateIsChecked: false,
				tagIsChecked: false
			};

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description filter records in dropdown and newsitems on page
			 * @param 'Query', function (newValue, oldValue, $scope
			 * @returns
			 */
			$scope.$watch('Query', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.dataArray = searchService.setDataArray($scope.Query.authorIsChecked, $scope.Query.dateIsChecked, $scope.Query.tagIsChecked, newsItemsService.getNewsItemsArray());
					$scope.records = searchService.search(searchService.getNewArray(), newsItemsService.getNewsItemsArray(), $scope.Query.query).a;
					$scope.searchResults = searchService.search(searchService.getNewArray(), newsItemsService.getNewsItemsArray(), $scope.Query.query).b;
					searchService.setSearchResultsArray($scope.searchResults);
					searchService.setQuery($scope.Query);
					$scope.searchResults = searchService.showSearchResults('searchInput');
				}
			}, true);

			$scope.searchResults = false;

			/**
			 * @ngdoc function
			 * @name hideDropdownh
			 * @description hide dropdown
			 * @param 'Query', function (newValue, oldValue, $scope
			 * @returns
			 */
			$scope.hideDropdown = function () {
				$scope.searchResults = false;
			};
		}]);
})();
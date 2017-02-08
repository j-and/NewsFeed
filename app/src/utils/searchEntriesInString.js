(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('searchService', [function () {

			var searchResultsArray;
			var searchRecords;
			var searchEntriesInString = function (array, id) {
				var dataArray = array;
				var matchesTitleArrayIndex = [];

				var input = document.getElementById(id);
				for (var i = 0; i < dataArray.length; i++) {
					for (var j = 0; j < dataArray[i].length + 1; j++) {
						for (var k = 0; k < dataArray[i].length; k++) {
							if (input.value.toUpperCase() == dataArray[i].substr(k, j).toUpperCase()) {
								matchesTitleArrayIndex.push(i);
							}
						}
					}
				}
				unique(matchesTitleArrayIndex, dataArray);
			};

			var unique = function (array, dataArray) {
				searchResultsArray = [];
				var obj = {};
				for (var i = 0; i < array.length; i++) {
					var str = array[i];
					obj[str] = true;
				}
				for (var k = 0; k < Object.keys(obj).length; k++) {
					var j = Object.keys(obj)[k];
					searchResultsArray.push(dataArray[j])
				}
				setRecords(searchResultsArray);
				array.length = 0;
			};

			var setRecords = function (array) {
				searchRecords = array;
			};

			var getRecords = function () {
				return searchRecords;
			};

			var showSearchResults = function (id) {
				var input = document.getElementById(id);
				var searchResults;
				event.stopPropagation();
				if (input.value != '') {
					return searchResults = true;
				}
			};

			return {
				searchEntriesInString: searchEntriesInString,
				showSearchResults: showSearchResults,
				getRecords: getRecords
			};
		}]);
})();

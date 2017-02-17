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

			var search = function (authorIsChecked, dateIsChecked, tagIsChecked, query, authorsArray, datesArray, tagsArray) {
				if (!authorIsChecked) {
					authorIsChecked = false
				}
				if (!dateIsChecked) {
					dateIsChecked = false
				}
				if (!tagIsChecked) {
					tagIsChecked = false
				}
				var records = authorsArray.concat(datesArray).concat(tagsArray);
				if (authorIsChecked == dateIsChecked == tagIsChecked) {
					records = authorsArray.concat(datesArray).concat(tagsArray);
				}
				if (authorIsChecked == true) {
					records = authorsArray;
				}
				if (dateIsChecked == true) {
					records = datesArray;
				}
				if (tagIsChecked == true) {
					records = tagsArray;
				}
				if (authorIsChecked == true && dateIsChecked == true) {
					records = authorsArray.concat(datesArray);
				}
				if (authorIsChecked == true && tagIsChecked == true) {
					records = authorsArray.concat(tagsArray);
				}
				if (dateIsChecked == true && tagIsChecked == true) {
					records = datesArray.concat(tagsArray);
				}
				setRecords(records);
			};


			return {
				searchEntriesInString: searchEntriesInString,
				showSearchResults: showSearchResults,
				getRecords: getRecords,
				search: search
			};
		}]);
})();

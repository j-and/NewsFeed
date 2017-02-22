(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('searchService', [function () {

			var searchResultsArray;
			var searchRecords;
			var newArray = [];
			var setRecords = function (array) {
				searchRecords = array;
			};

			var getRecords = function () {
				return searchRecords;
			};

			var setNewArray = function (array) {
				newArray = array;
			};

			var getNewArray = function () {

				return newArray;
			};


			var showSearchResults = function (id) {
				var input = document.getElementById(id);
				var searchResults;
				event.stopPropagation();
				if (input.value != '') {
					return searchResults = true;
				}
			};


			var search = function (authorIsChecked, dateIsChecked, tagIsChecked, objectsArray, query) {
				var matchesTitleArrayIndex = [];
				var dataArray = [];
				if (authorIsChecked == undefined) {
					authorIsChecked = false
				}
				if (dateIsChecked == undefined) {
					dateIsChecked = false
				}
				if (tagIsChecked == undefined) {
					tagIsChecked = false
				}

				if (authorIsChecked == false && dateIsChecked == false && tagIsChecked == false) {
					for (var i = 0; i < objectsArray.length; i++) {
						dataArray.push(objectsArray[i].author);
						dataArray.push(objectsArray[i].date);
						if (objectsArray[i].tag) {
							dataArray.push(objectsArray[i].tag);
						}
					}
				}

				if (authorIsChecked == true && dateIsChecked == true && tagIsChecked == true) {
					for (var i = 0; i < objectsArray.length; i++) {
						dataArray.push(objectsArray[i].author);
						dataArray.push(objectsArray[i].date);
						if (objectsArray[i].tag) {
							dataArray.push(objectsArray[i].tag);
						}
					}
				}
				if (authorIsChecked == false && dateIsChecked == true && tagIsChecked == true) {
					for (var i = 0; i < objectsArray.length; i++) {
						dataArray.push(objectsArray[i].date);
						if (objectsArray[i].tag) {
							dataArray.push(objectsArray[i].tag);
						}
					}
				}
				if (authorIsChecked == false && dateIsChecked == false && tagIsChecked == true) {
					for (var i = 0; i < objectsArray.length; i++) {
						if (objectsArray[i].tag) {
							dataArray.push(objectsArray[i].tag);
						}
					}
				}
				if (authorIsChecked == true && dateIsChecked == true && tagIsChecked == false) {
					for (var i = 0; i < objectsArray.length; i++) {
						dataArray.push(objectsArray[i].author);
						dataArray.push(objectsArray[i].date);
					}
				}
				if (authorIsChecked == true && dateIsChecked == false && tagIsChecked == true) {
					for (var i = 0; i < objectsArray.length; i++) {
						dataArray.push(objectsArray[i].author);
						if (objectsArray[i].tag) {
							dataArray.push(objectsArray[i].tag);
						}
					}
				}
				if (authorIsChecked == true && dateIsChecked == false && tagIsChecked == false) {
					for (var i = 0; i < objectsArray.length; i++) {
						dataArray.push(objectsArray[i].author);
					}
				}
				if (authorIsChecked == false && dateIsChecked == true && tagIsChecked == false) {
					for (var i = 0; i < objectsArray.length; i++) {
						dataArray.push(objectsArray[i].date);
					}
				}
				//if (query) {
				for (var i = 0; i < dataArray.length; i++) {
					if (dataArray[i]) {
						for (var j = 0; j < dataArray[i].length + 1; j++) {
							for (var k = 0; k < dataArray[i].length; k++) {
								if (query.toUpperCase() == dataArray[i].substr(k, j).toUpperCase()) {
									matchesTitleArrayIndex.push(i);
								}
							}
						}
					}
				}
				//}
				filterNewsRecords(matchesTitleArrayIndex, dataArray);
				filterNews(dataArray, objectsArray);
			};

			var uniqueKeys = function (arr) {
				var obj = {};
				for (var i = 0; i < arr.length; i++) {
					var str = arr[i];
					obj[str] = true;
				}
				return Object.keys(obj);
			}


			var filterNewsRecords = function (array, dataArray) {
				searchResultsArray = [];
				uniqueKeys(array)
				for (var k = 0; k < uniqueKeys(array).length; k++) {
					var j = uniqueKeys(array)[k];
					searchResultsArray.push(dataArray[j]);
				}
				setRecords(searchResultsArray);
				array.length = 0;
			};

			var filterNews = function (dataArray, objectsArray) {
				var array = [];
				for (var i = 0; i < getRecords().length; i++) {
					for (var j = 0; j < objectsArray.length; j++) {
						if (objectsArray[j].author == getRecords()[i] || objectsArray[j].date == getRecords()[i] || objectsArray[j].tag == getRecords()[i]) {
							array.push(j);
						}
					}
				}
				var idArray = uniqueKeys(array);
				for (var i = 0; i < idArray.length; i++) {
					var id = idArray[i];
					newArray.push(objectsArray[id])
				}
			};


			return {
				showSearchResults: showSearchResults,
				getRecords: getRecords,
				search: search,
				newArray: newArray
			};
		}
		])
		.factory('Query', ['searchService', function (searchService) {
			var query;

			return {
				query: query
			};
		}]);
})
();

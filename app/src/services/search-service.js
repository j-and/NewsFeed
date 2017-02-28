(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('searchService', ['newsItemsService', function (newsItemsService) {

			var searchResultsArray;
			var searchRecords;
			var newArray = [];
			var selectedFilters = {};
			var Query;

			var setRecords = function (array) {
				searchRecords = array;
			};

			var getRecords = function () {
				return searchRecords;
			};

			var setNewArray = function (array) {
				newArray = array;
			};

			var setSearchResultsArray = function (array) {
				searchResultsArray = array;
			};

			var getSearchResultsArray = function () {
				return searchResultsArray;
			};

			var getNewArray = function () {
				return newArray;
			};

			var setQuery = function (query) {
				Query = query;
			};

			var getQuery = function () {
				return Query;
			}

			var showSearchResults = function (id) {
				var input = document.getElementById(id);
				var searchResults;
				event.stopPropagation();
				if (input.value != '') {
					return searchResults = true;
				}
			};

			var setDataArray = function (authorIsChecked, dateIsChecked, tagIsChecked, objectsArray) {
				var dataArray = [];
				dataArray.length = 0;
				if ((authorIsChecked == false && dateIsChecked == false && tagIsChecked == false) || (authorIsChecked == true && dateIsChecked == true && tagIsChecked == true)) {
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
				setNewArray(dataArray)
			};

			var object = {};
			var search = function (dataArray, objectsArray, query) {
				var matchesTitleArrayIndex = [];
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
				object = {
					a: filterNewsRecords(matchesTitleArrayIndex, dataArray),
					b: filterNews(dataArray, objectsArray)
				};
				return object;
			};

			var uniqueKeys = function (arr) {
				var obj = {};
				for (var i = 0; i < arr.length; i++) {
					var str = arr[i];
					obj[str] = true;
				}
				return Object.keys(obj);
			};

			var filterNewsRecords = function (array, dataArray) {
				searchResultsArray = [];
				uniqueKeys(array);
				for (var k = 0; k < uniqueKeys(array).length; k++) {
					var j = uniqueKeys(array)[k];
					searchResultsArray.push(dataArray[j]);
				}
				setRecords(searchResultsArray);
				array.length = 0;
				return searchResultsArray;
			};

			var filterNews = function (dataArray, objectsArray) {
				var array = [];
				var newObjectsArray = [];
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
					newObjectsArray.push(objectsArray[id]);

				}
				setSearchResultsArray(newObjectsArray);
				return newObjectsArray;

			};

			var itemsPerPage = 3;
			var currentPage;

			var perPageArray = [];
			var divideToPages = function (currentPage, array) {
				perPageArray.length = 0;
				var start = (currentPage - 1) * itemsPerPage;
				for (var i = start; i < start + itemsPerPage; i++) {
					if (array[i]) {
						perPageArray.push(array[i])
					}
				}
				return perPageArray;
			};

			return {

				showSearchResults: showSearchResults,
				getRecords: getRecords,
				search: search,
				newArray: newArray,
				divideToPages: divideToPages,
				perPageArray: perPageArray,
				currentPage: currentPage,
				setDataArray: setDataArray,
				getNewArray: getNewArray,
				setSearchResultsArray: setSearchResultsArray,
				getSearchResultsArray: getSearchResultsArray,
				setQuery: setQuery,
				getQuery: getQuery
			};
		}
		]);
})
();

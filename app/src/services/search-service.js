(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('searchService', ['newsItemsService', function (newsItemsService) {

			var searchResultsArray;
			var searchRecords;
			var newArray = [];
			var selectedFilters = {};
			var Query;

			/**
			 * @ngdoc function
			 * @name setRecords
			 * @description  set records
			 * @param  ( array)
			 * @returns
			 */
			var setRecords = function (array) {
				searchRecords = array;
			};

			/**
			 * @ngdoc function
			 * @name getRecords
			 * @description  get records
			 * @param  ( searchRecords)
			 * @returns
			 */
			var getRecords = function () {
				return searchRecords;
			};

			/**
			 * @ngdoc function
			 * @name setNewArray
			 * @description  set new array
			 * @param  ( array)
			 * @returns
			 */
			var setNewArray = function (array) {
				newArray = array;
			};

			/**
			 * @ngdoc function
			 * @name setSearchResultsArray
			 * @description  set search results array
			 * @param  ( array)
			 * @returns
			 */
			var setSearchResultsArray = function (array) {
				searchResultsArray = array;
			};

			/**
			 * @ngdoc function
			 * @name getSearchResultsArray
			 * @description  gets search results array
			 * @param
			 * @returns( searchResultsArray)
			 */
			var getSearchResultsArray = function () {
				return searchResultsArray;
			};

			/**
			 * @ngdoc function
			 * @name getNewArray
			 * @description  gets new array
			 * @param
			 * @returns( newArray)
			 */
			var getNewArray = function () {
				return newArray;
			};

			/**
			 * @ngdoc function
			 * @name setQuery
			 * @description  set query
			 * @param  ( query)
			 * @returns
			 */
			var setQuery = function (query) {
				Query = query;
			};

			/**
			 * @ngdoc function
			 * @name getQuery
			 * @description  get query
			 * @param
			 * @returns( query)
			 */
			var getQuery = function () {
				return Query;
			}

			/**
			 * @ngdoc function
			 * @name showSearchResults
			 * @description  shows search results
			 * @param
			 * @returns( searchResults = true)
			 */
			var showSearchResults = function (id) {
				var input = document.getElementById(id);
				var searchResults;
				event.stopPropagation();
				if (input.value != '') {
					return searchResults = true;
				}
			};

			/**
			 * @ngdoc function
			 * @name setDataArray
			 * @description sets  dataArray according to selected filters
			 * @param  (authorIsChecked, dateIsChecked, tagIsChecked, objectsArray)
			 * @returns
			 */
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

			/**
			 * @ngdoc function
			 * @name search
			 * @description filters array according to query
			 * @param  (dataArray, objectsArray, query)
			 * @returns {object}
			 */
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

			/**
			 * @ngdoc function
			 * @name uniqueKeys
			 * @description  find unique items in filtred array
			 * @param  (array,)
			 * @returns {Object.keys(obj)}
			 */
			var uniqueKeys = function (arr) {
				var obj = {};
				for (var i = 0; i < arr.length; i++) {
					var str = arr[i];
					obj[str] = true;
				}
				return Object.keys(obj);
			};

			/**
			 * @ngdoc function
			 * @name filterNewsRecords
			 * @description  filter news records
			 * @param  (array, dataArray)
			 * @returns {searchResultsArray}
			 */
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

			/**
			 * @ngdoc function
			 * @name filterNews
			 * @description  filter news
			 * @param  (dataArray, objectsArray)
			 * @returns {newObjectsArray}
			 */
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

			/**
			 * @ngdoc function
			 * @name divideToPages
			 * @description  divide array to pages
			 * @param  (currentPage, array)
			 * @returns {perPageArray}
			 */
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

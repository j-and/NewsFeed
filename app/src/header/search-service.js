(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('searchService', function () {

				var searchResultsArray;
				var searchRecords;
				var newArray = [];
				var searchQuery;

				/**
				 * @ngdoc function
				 * @name setRecords
				 * @description  set records
				 * @param  {object} array
				 */
				var setRecords = function (array) {
					searchRecords = array;
				};

				/**
				 * @ngdoc function
				 * @name getRecords
				 * @description  get records
				 * @return  {object}searchRecords
				 */
				var getRecords = function () {
					return searchRecords;
				};

				/**
				 * @ngdoc function
				 * @name setNewArray
				 * @description  set new array
				 * @param  {object} array
				 */
				var setNewArray = function (array) {
					newArray = array;
				};

				/**
				 * @ngdoc function
				 * @name setSearchResultsArray
				 * @description  set search results array
				 * @param  {object} array
				 */
				var setSearchResultsArray = function (array) {
					searchResultsArray = array;
				};

				/**
				 * @ngdoc function
				 * @name getSearchResultsArray
				 * @description  gets search results array
				 * @return {object} searchResultsArray
				 */
				var getSearchResultsArray = function () {
					return searchResultsArray;
				};

				/**
				 * @ngdoc function
				 * @name getNewArray
				 * @description  gets new array
				 * @return {object}newArray
				 */
				var getNewArray = function () {
					return newArray;
				};

				/**
			 * @ngdoc function
			 * @name setSearchQuery
			 * @description  set query
			 * @param  {object} query
			 */
			var setSearchQuery = function (query) {
					searchQuery = query;
				};

			/**
			 * @ngdoc function
			 * @name getSearchQuery
			 * @description  get query
			 * @returns{object} query
			 */
			var getSearchQuery = function () {
				return searchQuery;
			};

				/**
				 * @ngdoc function
				 * @name showSearchResults
				 * @description  shows search results
				 * @returns {object} searchResults
				 */
				var showSearchResults = function () {
					var searchResults;
					event.stopPropagation();
					if (searchQuery.query) {
						return searchResults = true;
					}
				};

			/**
			 * @ngdoc function
			 * @name setSearchQuery
			 * @description  set query
			 * @param  {object} query
			 */
			var setCurrentPage = function (page) {

				currentPage = page;
			};

			/**
			 * @ngdoc function
			 * @name getSearchQuery
			 * @description  get query
			 * @returns{object} query
			 */
			var getCurrentPage = function () {	
				return currentPage;
			};


				/**
				 * @ngdoc function
				 * @name setDataArray
				 * @description sets  dataArray according to selected filters
				 * @param  {object} searchQuery
				 *  * @param  {object} objectsArray
				 */
				var setDataArray = function (searchQuery, objectsArray) {
					var dataArray = [];
					angular.forEach(objectsArray, function (value) {
						if (searchQuery.authorIsChecked) {
							dataArray.push(value.author);
						}
						if (searchQuery.dateIsChecked) {
							dataArray.push(value.date);
						}
						if (searchQuery.tagIsChecked) {
							if (value.tag) {
								dataArray.push(value.tag);
							}
						}
						if (!searchQuery.authorIsChecked && !searchQuery.dateIsChecked && !searchQuery.tagIsChecked) {
							dataArray.push(value.author);
							dataArray.push(value.date);
							if (value.tag) {
								dataArray.push(value.tag);
							}
						}
					});
					setNewArray(dataArray)
				};

				var object = {};

				/**
				 * @ngdoc function
				 * @name search
				 * @description filters array according to query
				 * @param  {object} dataArray
				 * @param  {object} objectsArray
				 * @param  {string} query)
				 * @returns {object} object
				 *
				 */
				var search = function (dataArray, objectsArray, query) {
					var matchesTitleArrayIndex = [];
					for (var i = 0; i < dataArray.length; i++) {
						if (dataArray[i]) {
							for (var j = 0; j < dataArray[i].length + 1; j++) {
								for (var k = 0; k < dataArray[i].length; k++) {
									if (query.toUpperCase() === dataArray[i].substr(k, j).toUpperCase()) {
										matchesTitleArrayIndex.push(i);
									}
								}
							}
						}
					}
					object = {
						records: filterNewsRecords(matchesTitleArrayIndex, dataArray),
						newsItems: filterNews(dataArray, objectsArray)
					};
					return object;
				};

				/**
				 * @ngdoc function
				 * @name uniqueKeys
				 * @description  find unique items in filtred array
				 * @param  {object} array
				 * @returns {object} {Object.keys(obj)}
				 */
				var uniqueKeys = function (array) {
					var obj = {};
					angular.forEach(array, function (value) {
						obj[value] = true;
					});
					return Object.keys(obj);
				};

				/**
				 * @ngdoc function
				 * @name filterNewsRecords
				 * @description  filter news records
				 * @param  {object}array
				 * @param  {object}dataArray
				 * @returns {searchResultsArray}
				 */
				var filterNewsRecords = function (array, dataArray) {
					searchResultsArray = [];
					uniqueKeys(array);
					angular.forEach(uniqueKeys(array), function (value) {
						searchResultsArray.push(dataArray[value]);
					});
					setRecords(searchResultsArray);
					array.length = 0;
					return searchResultsArray;
				};

				/**
				 * @ngdoc function
				 * @name filterNews
				 * @description  filter news
				 * @param  {object}dataArray
				 * @param  {object}objectsArray
				 * @returns {object}newObjectsArray
				 */
				var filterNews = function (dataArray, objectsArray) {
					var array = [];
					var newObjectsArray = [];
					angular.forEach(getRecords(), function (record) {
						angular.forEach(objectsArray, function (newsItem) {
							if (newsItem.author === record || newsItem.date === record || newsItem.tag === record) {
								array.push(newsItem.id);
							}
						})
					});
					angular.forEach(uniqueKeys(array), function (id) {
						newObjectsArray.push(objectsArray[id]);
					});
					setSearchResultsArray(newObjectsArray);
					return newObjectsArray;

				};

				var itemsPerPage = 3;
				var currentPage;


				/**
				 * @ngdoc function
				 * @name divideToPages
				 * @description  divide array to pages
				 * @param  {number}currentPage
				 * @param  {object} array
				 * @returns {object}perPageArray
				 */
				var divideToPages = function (currentPage, array) {
					var perPageArray = [];
					var start = (currentPage - 1) * itemsPerPage;
					for (var i = start; i < start + itemsPerPage; i++) {
						if (array[i] && array[i].deleted === 'false') {
							perPageArray.push(array[i])
						}
					}
					return perPageArray;
				};

				return {

					showSearchResults: showSearchResults,
					getRecords: getRecords,
					search: search,
					// newArray: newArray,
					divideToPages: divideToPages,
					// currentPage: currentPage,
					setDataArray: setDataArray,
					getNewArray: getNewArray,
					setSearchResultsArray: setSearchResultsArray,
					getSearchResultsArray: getSearchResultsArray,
					setSearchQuery: setSearchQuery,
					getSearchQuery: getSearchQuery,
					setCurrentPage:setCurrentPage,
					getCurrentPage:getCurrentPage
				};
			}
		);
})
();

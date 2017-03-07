(function () {
	'use strict';
	angular.module('NewsFeed')
		.controller('paginationCtrl', ['newsItemsService', 'searchService', 'errorService', '$location', function (newsItemsService, searchService, errorService, $location) {

			var vm = this;
			var object=$.getJSON("/src/mocks/errorMessages.json");
			var newsItems = [];
			vm.currentPage = 1;
			var itemsPerPage = 3;
			var totalPages;

			vm.countTotalPages = function (array, itemsPerPage) {
				var arrayShown = [];
				for (var i = 0; i < array.length; i++) {
					if(array[i].deleted=='false'){
						arrayShown.push(array[i])
					}
				}
				totalPages = Math.round(arrayShown.length / itemsPerPage);
			};

			vm.countTotalPages(newsItemsService.getNewsItemsArray(), itemsPerPage);

			vm.goToErrorPage = function (message) {
				$location.path('/newsfeed/error');
				errorService.setErrorMessage(message);
			};

			/**
			 * @ngdoc function
			 * @name countUp
			 * @description independent counter(counts up)
			 * @returns (number) currentPage
			 */
			vm.countUp = function () {
				return function () {
					return vm.currentPage++;
				}
			};

			vm.counterUp = vm.countUp();


			/**
			 * @ngdoc function
			 * @name goNext
			 * @description redirects to next page if it exists
			 */
			vm.goNext = function () {
				vm.counterUp();
				if (searchService.getSearchResultsArray()) {
					newsItems = searchService.divideToPages(vm.currentPage, searchService.getSearchResultsArray());
				}
				else {
					newsItems = searchService.divideToPages(vm.currentPage, newsItemsService.getNewsItemsArray());
				}
				if (vm.currentPage> totalPages) {
					$.getJSON("/src/mocks/errorMessages.json", function(object) {
						vm.goToErrorPage(object.errorMessageText);
					});
				}
				searchService.setCurrentPage(vm.currentPage);
			};

			/**
			 * @ngdoc function
			 * @name countDown
			 * @description independent counter(counts down)
			 * * @returns (number) currentPage
			 */
			vm.countDown = function () {
				return function () {
					return vm.currentPage--;
				}
			};

			vm.counterDown = vm.countDown();


			/**
			 * @ngdoc function
			 * @name goPrevious
			 * @description redirects to previous page if it exists
			 */
			vm.goPrevious = function () {
				vm.counterDown();
				if (searchService.getSearchResultsArray()) {
					newsItems = searchService.divideToPages(vm.currentPage, searchService.getSearchResultsArray());
				}
				else {
					newsItems = searchService.divideToPages(vm.currentPage, newsItemsService.getNewsItemsArray());
				}
				if (vm.currentPage === 0) {
					vm.goToErrorPage('No more news');
				}
				searchService.setCurrentPage(vm.currentPage);
			};

		}])

})();
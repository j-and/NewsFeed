(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['errorService', 'usersService', 'searchService', 'newsItemsService', '$scope', '$uibModal', function (errorService, usersService, searchService, newsItemsService, $scope, $uibModal) {
			$scope.role = usersService.getRole();
			$scope.usersService = usersService;
			$scope.currentPage =  1;
			$scope.itemsPerPage = 3;

			$scope.localStorageArray = newsItemsService.getNewsItemsArray();
			$scope.newsItems = searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());


			$scope.searchService = searchService;
			$scope.newsItemsService = newsItemsService;

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description sets newsItems if it's changed (if query is entered)
			 * @param {object}searchService.getSearchResultsArray()
			 * @param {object} function (newValue, oldValue, $scope)
			 */
			$scope.$watch('searchService.getSearchResultsArray()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.newsItems = searchService.getSearchResultsArray();
					$scope.array = [];
					for (var i = 0; i < searchService.getSearchResultsArray().length; i++) {
						$scope.array.push(searchService.getSearchResultsArray()[i]);
					}
					$scope.newsItems = $scope.array.splice($scope.currentPage - 1, $scope.itemsPerPage);
					$scope.countTotalPages(searchService.getSearchResultsArray(), $scope.itemsPerPage);
				}
			}, true);

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description sets newsItems if it's changed
			 * @param {object} newsItemsService.getNewsItemsArray()
			 * @param {object} function (newValue, oldValue, $scope)
			 */
			$scope.$watch('newsItemsService.getNewsItemsArray()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.newsItems = searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());
					$scope.countTotalPages(newsItemsService.getNewsItemsArray(), $scope.itemsPerPage);
				}
			}, true);

			/**
			 * @ngdoc function
			 * @name openEditNewsModal
			 * @description open edit news modal
			 * @param {number} index
			 */
			$scope.openEditNewsModal = function (index) {
				$scope.newsItem = {
						author: $scope.newsItems[index].author,
						date: $scope.newsItems[index].date,
						deleted: 'false',
						id: $scope.newsItems[index].id,
						summary: $scope.newsItems[index].summary,
						tag: $scope.newsItems[index].tag,
						text: $scope.newsItems[index].text,
						title: $scope.newsItems[index].title
					} || {};
				$uibModal.open({
					templateUrl: '/src/news/editNewsModal/editNewsModal.html',
					controller: 'editNewsModalCtrl',
					controllerAs: 'editNews',
					resolve: {
						newsItem: function () {
							return $scope.newsItem;
						},
						index: function () {
							return index;
						}
					}
				})
			};

			/**
			 * @ngdoc function
			 * @name openDeleteNewsModal
			 * @description open delete news modal
			 * @param {number} index
			 */
			$scope.openDeleteNewsModal = function (index) {
				var modalInstance = $uibModal.open({
					templateUrl: '/src/news/deleteNewsModal/deleteNewsModal.html',
					controller: 'deleteNewsModalCtrl',
					controllerAs: 'deleteNews',
					resolve: {
						index: function () {
							return $scope.index;
						}
					}
				});
				modalInstance.result.then(function () {
					$scope.index = index + ($scope.currentPage - 1) * $scope.itemsPerPage;
					$scope.newsItem = newsItemsService.getNewsItemsArray()[$scope.index];
					$scope.newsItem.deleted = 'true';
					newsItemsService.deleteNewsItem($scope.newsItem, $scope.index);
					$scope.newsItems = searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());
				});
			};

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description set users role if it'schanged
			 * @param {object} usersService.getRole()
			 * @param {object} function (newValue, oldValue, $scope)
			 */
			$scope.$watch('usersService.getRole()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.role = usersService.getRole();
				}
			}, true);


			/**
			 * @ngdoc function
			 * @name $watch
			 * @description gets currentPage
			 * @param {object} searchService.getCurrentPage()
			 * @param {object}  function (newValue, oldValue, $scope)
			 */
			$scope.$watch('searchService.getCurrentPage()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.newsItems = searchService.divideToPages(searchService.getCurrentPage(), newsItemsService.getNewsItemsArray());
				}
			}, true);


		}]);
})();



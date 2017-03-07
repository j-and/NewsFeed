(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['errorService', 'usersService', 'searchService', 'newsItemsService', '$scope', '$uibModal', function (errorService, usersService, searchService, newsItemsService, $scope, $uibModal) {

			var vm = this;

			$scope.role = usersService.getRole();
			$scope.usersService = usersService;
			$scope.searchService = searchService;
			$scope.newsItemsService = newsItemsService;

			vm.currentPage = 1;
			vm.itemsPerPage = 3;

			vm.localStorageArray = newsItemsService.getNewsItemsArray();
			vm.newsItems = searchService.divideToPages(vm.currentPage, newsItemsService.getNewsItemsArray());

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description sets vm.newsItems if it's changed (if query is entered)
			 * @param {object}searchService.getSearchResultsArray()
			 * @param {object} function (newValue, oldValue, $scope)
			 */
			$scope.$watch('searchService.getSearchResultsArray()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					var array = [];
					angular.forEach(searchService.getSearchResultsArray(), function (searchResult) {
						array.push(searchResult);
					});
					vm.newsItems = array.splice(vm.currentPage - 1, vm.itemsPerPage);
				}
			}, true);

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description sets vm.newsItems if it's changed
			 * @param {object} newsItemsService.getvm.newsItemsArray()
			 * @param {object} function (newValue, oldValue, $scope)
			 */
			$scope.$watch('newsItemsService.getNewsItemsArray()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					vm.newsItems = searchService.divideToPages(vm.currentPage, newsItemsService.getNewsItemsArray());
				}
			}, true);

			/**
			 * @ngdoc function
			 * @name openEditNewsModal
			 * @description open edit news modal
			 * @param {number} index
			 */
			$scope.openEditNewsModal = function (index) {
				vm.newsItem = {
						author: vm.newsItems[index].author,
						date: vm.newsItems[index].date,
						deleted: 'false',
						id: vm.newsItems[index].id,
						summary: vm.newsItems[index].summary,
						tag: vm.newsItems[index].tag,
						text: vm.newsItems[index].text,
						title: vm.newsItems[index].title
					} || {};
				$uibModal.open({
					templateUrl: '/src/news/editNewsModal/editNewsModal.html',
					controller: 'editNewsModalCtrl',
					controllerAs: 'editNews',
					resolve: {
						newsItem: function () {
							return vm.newsItem;
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
							return vm.index;
						}
					}
				});
				modalInstance.result.then(function () {
					vm.index = index + (vm.currentPage - 1) * vm.itemsPerPage;
					vm.newsItem = newsItemsService.getNewsItemsArray()[vm.index];
					vm.newsItem.deleted = 'true';
					newsItemsService.deleteNewsItem(vm.newsItem, vm.index);
					vm.newsItems = searchService.divideToPages(vm.currentPage, newsItemsService.getNewsItemsArray());
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



(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['errorService', 'searchService', 'newsItemsService', '$scope', '$uibModal', function (errorService, searchService, newsItemsService, $scope, $uibModal) {
			$scope.role = 'user';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			// $scope.newsItems = newsItemsService.getNewsItemsArray();
			$scope.currentPage = 1;
			$scope.itemsPerPage = 3;
			$scope.newsItems = searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());

			$scope.searchService = searchService;
			$scope.newsItemsService = newsItemsService;

			$scope.countTotalPages = function (array, itemsPerPage) {
				$scope.totalPages = Math.round(array.length / itemsPerPage);
				console.log('$scope.totalPages=' + $scope.totalPages)
			};

			$scope.countTotalPages(newsItemsService.getNewsItemsArray(), $scope.itemsPerPage);

			$scope.goToErrorPage = function (message) {
				errorService.setErrorMessage(message);
				window.location = 'http://localhost:8000/#!/newsfeed/error';
			};

			$scope.countUp = function (event) {
				return function () {
					return $scope.currentPage++;
				}
			};

			$scope.counterUp = $scope.countUp();

			$scope.counterClean = function () {
				$scope.currentPage = 1;
				return $scope.currentPage;
			};

			$scope.goNext = function () {
				$scope.counterUp();
				if (searchService.getSearchResultsArray()) {
					$scope.newsItems = searchService.divideToPages($scope.currentPage, searchService.getSearchResultsArray());
				}
				else {
					$scope.newsItems = searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());
				}
				if ($scope.currentPage > $scope.totalPages) {
					$scope.goToErrorPage('No more news');
				}
			};

			$scope.countDown = function (event) {
				return function () {
					return $scope.currentPage--;
				}
			};

			$scope.counterDown = $scope.countDown();

			$scope.goPrevious = function () {
				$scope.counterDown();
				if (searchService.getSearchResultsArray()) {
					$scope.newsItems = searchService.divideToPages($scope.currentPage, searchService.getSearchResultsArray());
				}
				else {
					$scope.newsItems = searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());
				}
				if ($scope.currentPage == 0) {
					$scope.goToErrorPage('No more news');
				}
			};

			$scope.$watch('searchService.getSearchResultsArray()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.newsItems = searchService.getSearchResultsArray();//.splice(0, 3);
					$scope.array = [];
					for (var i = 0; i < searchService.getSearchResultsArray().length; i++) {
						$scope.array.push(searchService.getSearchResultsArray()[i]);
					}
					$scope.newsItems = $scope.array.splice($scope.currentPage - 1, $scope.itemsPerPage);
				}
			}, true);

			$scope.$watch('newsItemsService.getNewsItemsArray()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.newsItems = searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());
				}
			}, true);


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

			$scope.openDeleteNewsModal = function (index) {console.log('index='+index)
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
					$scope.index = index;
					newsItemsService.deleteNewsItem(newsItemsService.getNewsItemsArray(),$scope.index);
				});
			};

			$scope.$watch('newsItemsService.getNewsItemsArray()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.newsItems = newsItemsService.getNewsItemsArray();
				}
			}, true);

		}]);
})();



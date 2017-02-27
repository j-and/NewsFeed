(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['errorService', 'searchService', 'addIdService', 'newsItemsService', '$scope', '$uibModal', 'Query', function (errorService, searchService, addIdService, newsItemsService, $scope, $uibModal, Query) {
			$scope.role = 'user';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			// $scope.newsItems = newsItemsService.getNewsItemsArray();
			$scope.currentPage = 1;
			$scope.itemsPerPage = 3;
			$scope.newsItems = searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());
			// $scope.newsItems = searchService.perPageArray;
			// console.log('$scope.newsItems.length='+$scope.newsItems.length);

			$scope.Query = Query;


			$scope.countTotalPages = function (array, itemsPerPage) {
				$scope.totalPages = Math.round(array.length / itemsPerPage);
				console.log('$scope.totalPages=' + $scope.totalPages)
			};

			$scope.countTotalPages(newsItemsService.getNewsItemsArray(), $scope.itemsPerPage);

			$scope.goToErrorPage = function (message) {
				errorService.setErrorMessage(message);
				Query.query = '';
				//searchService.setSelectedFilters(false,false,false);
			//	$scope.authorIsChecked.removeAttribute('checked')
				window.location = 'http://localhost:8000/#!/newsfeed/error';
			};

			//go to next page
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
				if (!Query.query) {
					searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());

				}
				else {
					$scope.newsItems=searchService.divideToPages(0, $scope.array);
					//$scope.newsItems.length =0;
					for (var i = ($scope.currentPage - 1) * 3; i < $scope.currentPage * 3; i++) {
						if (i < $scope.array.length) {
							$scope.newsItems.push($scope.array[i]);
						}
					}
				}

				if ($scope.currentPage > $scope.totalPages) {
					$scope.goToErrorPage('No more news');
				}
			};

			//go to previous page
			$scope.countDown = function (event) {
				return function () {
					return $scope.currentPage--;
				}
			};

			$scope.counterDown = $scope.countDown();

			$scope.goPrevious = function () {
				$scope.counterDown();
				if (!Query.query) {
					searchService.divideToPages($scope.currentPage, newsItemsService.getNewsItemsArray());
				}
				else {
					$scope.newsItems.length = 0;
					if ($scope.currentPage == $scope.totalPages) {
						for (var i = $scope.array.length; i > ($scope.array.length - $scope.currentPage * 3); i--) {
							$scope.newsItems.push($scope.array.reverse()[i]);
						}
					}
					else {
						$scope.newsItems=searchService.divideToPages(0, $scope.array);
						for (var i = ($scope.currentPage) * 3 - 1; i > ($scope.currentPage - 1) * 3 - 1; i--) {
							if (i >= 0) {
								$scope.newsItems.push($scope.array[i]);
								$scope.newsItems.reverse()
							}
						}
					}
				}
				if ($scope.currentPage == 0) {
					$scope.goToErrorPage('No more news');
				}
			};

			searchService.setSelectedFilters(false, false, false);

			$scope.$watch('Query', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.authorIsChecked = searchService.getSelectedFilters().authorIsChecked;
					$scope.dateIsChecked = searchService.getSelectedFilters().dateIsChecked;
					$scope.tagIsChecked = searchService.getSelectedFilters().tagIsChecked;
					$scope.array = [];

					console.log('//'+$scope.dateIsChecked)

					$scope.counterClean();
					$scope.dataArray=searchService.setDataArray($scope.authorIsChecked, $scope.dateIsChecked, $scope.tagIsChecked,newsItemsService.getNewsItemsArray());
					console.log('$scope.dataArray='+$scope.dataArray)
					$scope.searchResults = searchService.search($scope.dataArray, newsItemsService.getNewsItemsArray(), Query.query).b;
					$scope.countTotalPages($scope.searchResults, $scope.itemsPerPage);
					if ($scope.searchResults.length == 0) {
						$scope.goToErrorPage('No matches is found');
					}
					for (var i = 0; i < $scope.searchResults.length; i++) {
						$scope.array.push($scope.searchResults[i]);
					}
					$scope.newsItems = $scope.searchResults.splice(0, 4);
					$scope.searchResults.length = 0;
					}
			}, true);

			$scope.openEditNewsModal = function (index) {
				$scope.newsItem = {
						author: $scope.newsItems[index].author,
						summary: $scope.newsItems[index].summary,
						tag: $scope.newsItems[index].tag,
						text: $scope.newsItems[index].text,
						theme: $scope.newsItems[index].theme,
						title: $scope.newsItems[index].title
					} || {};
				$uibModal.open({
					templateUrl: '/src/alerts/deleteNews/editNewsModal/editNewsModal.html',
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


			$scope.openDeleteNewsModal = function (index) {
				var modalInstance = $uibModal.open({
					templateUrl: '/src/alerts/deleteNews/deleteNewsModal/deleteNewsModal.html',
					controller: 'deleteNewsModalCtrl',
					controllerAs: 'deleteNews'
				});

				modalInstance.result.then(function (param) {
					if (param) {
						$scope.newsItems[index].deleted = true;
						//console.log()
						newsItemsService.setNewsItemsArray(JSON.stringify($scope.newsItems));
					}
				});
			};
		}]);
})();



(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['searchService','addIdService', 'newsItemsService', '$scope', '$uibModal','Query', function (searchService,addIdService, newsItemsService, $scope, $uibModal,Query) {
			$scope.role = 'user';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			$scope.newsItems = newsItemsService.getNewsItemsArray();
			$scope.Query = Query;

			var authorIsChecked;
			var dateIsChecked;
			var tagIsChecked;

			//go to next page
			$scope.countUp=function (event) {
				var currentPage = 1;
				return function a() {
					return currentPage++;
				}
			};

			$scope.counterUp = $scope.countUp();

			$scope.goNext = function () {
				searchService.goToNextPage($scope.counterUp());
				$scope.newsItems = searchService.perPageArray;
			}

			//go to previous page
			$scope.countDown=function (event) {
				var currentPage = 1;
				return function a() {
					return currentPage--;
				}
			};

			$scope.counterDown = $scope.countDown();

			$scope.goPrevious = function () {
				searchService.goToNextPage($scope.counterDown());
				$scope.newsItems = searchService.perPageArray;
			}
			
			
			$scope.$watch('Query', function (newValue, oldValue, $scope) {
					if (newValue !== oldValue) {
						$scope.newsItems = searchService.perPageArray;
						searchService.newArray.length = 0;
					}
				},true);


			$scope.openEditNewsModal = function (index) {
				$scope.newsItem = {
						author: $scope.newsItems[index].author ,
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
						newsItemsService.setNewsItemsArray(JSON.stringify($scope.newsItems));
					}
				});
			};
		}]);
	// 	.filter('offset', function() {
	// 	return function(input, start) {
	// 		return input.slice(start);
	// 	};
	// })
})();



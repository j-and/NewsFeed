(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['searchService','addIdService', 'newsItemsService', '$scope', '$uibModal','Query', function (searchService,addIdService, newsItemsService, $scope, $uibModal,Query) {
			$scope.role = 'user';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			//$scope.newsItems = newsItemsService.getNewsItemsArray();
			$scope.itemsPerPage=3;
			$scope.newsItems = searchService.perPageArray;
			//$scope.totalPages= Math.round(newsItemsService.getNewsItemsArray() / $scope.itemsPerPage);
			$scope.Query = Query;

			var authorIsChecked=false;
			var dateIsChecked=false;
			var tagIsChecked=false;
			$scope.currentPage=1;

			//go to next page
			$scope.countUp=function (event) {
				return function () {
					return $scope.currentPage++;
				}
			};

			$scope.counterUp = $scope.countUp();

			$scope.counterClean = function () {
				$scope.currentPage=1;
					return $scope.currentPage;
			};

			$scope.goNext = function () {
				if(!Query.query){
					searchService.goToNextPage($scope.counterUp(),newsItemsService.getNewsItemsArray());
				}
				else{
					 $scope.newsItems=$scope.newsItems.splice(($scope.counterUp())-1,3);
				}
			};

			//go to previous page
			$scope.countDown=function (event) {
				var currentPage = 1;
				return function () {
					return currentPage--;
				}
			};

			$scope.counterDown = $scope.countDown();

			$scope.goPrevious = function () {
				searchService.goToNextPage($scope.counterDown());
				$scope.newsItems = searchService.perPageArray;
			};

			$scope.$watch('Query', function (newValue, oldValue, $scope) {
					if (newValue !== oldValue) {
						$scope.counterClean();
						$scope.newsItems.length=0;
						$scope.searchResults=searchService.search(authorIsChecked, dateIsChecked, tagIsChecked, newsItemsService.getNewsItemsArray(), Query.query,$scope.currentPage);
						for(var i=0;i<$scope.searchResults.length;i++){
							$scope.newsItems.push($scope.searchResults[i]);
						}
						$scope.newsItems=$scope.newsItems.splice(($scope.counterUp())-1,3)
						 $scope.searchResults.length=0;
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



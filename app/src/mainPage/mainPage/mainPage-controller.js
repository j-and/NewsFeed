(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['searchService','addIdService', 'newsItemsService', '$scope', '$uibModal','Query', function (searchService,addIdService, newsItemsService, $scope, $uibModal,Query) {
			$scope.role = 'user';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			$scope.newsItems = newsItemsService.getNewsItemsArray();
			$scope.Query = Query;


			$scope.currentPage = 1;
			$scope.itemsPerPage = 3;
			$scope.maxSize = 10;
			$scope.totalItems = 13;


			var authorIsChecked;
			var dateIsChecked;
			var tagIsChecked;

			$scope.$watch('Query', function (newValue, oldValue, $scope) {
			
					if (newValue !== oldValue) {

						//searchService.search(authorIsChecked, dateIsChecked, tagIsChecked,$scope.newsItems, $scope.query);
						$scope.newsItems = searchService.newArray;
						//$scope.newsItems = searchService.getNewArray();
						//console.log('authorIsChecked+'+authorIsChecked)
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
		}])
		.filter('offset', function() {
		return function(input, start) {
			return input.slice(start);
		};
	})
})();



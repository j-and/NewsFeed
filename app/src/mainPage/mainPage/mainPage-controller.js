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
			$scope.items=[]
			for(var i = 0; i < $scope.totalItems; i++){
				$scope.items[i] = $scope.newsItems[i]
		}

			var authorsArray = [];
			var datesArray = [];
			var tagsArray = [];
			var titlesArray = [];
			for (var i = 0; i < $scope.newsItems.length; i++) {
				authorsArray.push($scope.newsItems[i].author);
				datesArray.push($scope.newsItems[i].date);
				tagsArray.push($scope.newsItems[i].tag);
				titlesArray.push($scope.newsItems[i].title);
			}
			var authorIsChecked = false;
			var dateIsChecked = false;
			var tagIsChecked = false;

			$scope.$watch('Query', function (newValue, oldValue, $scope) {

					if (newValue !== oldValue) {

						 searchService.search(authorIsChecked, dateIsChecked, tagIsChecked, Query.query, authorsArray, datesArray, tagsArray);

						$scope.records = searchService.getRecords();
//console.log('authorIsChecked+'+Query.authorIsChecked)
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



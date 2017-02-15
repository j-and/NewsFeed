(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['newsItemsService', '$scope', '$uibModal', function (newsItemsService, $scope, $uibModal) {

			$scope.role = 'user';
			// $scope.newsStatus = 'notApproved';
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			$scope.newsItems = newsItemsService.getNewsItemsArray();

			$scope.openAddNewsModal = function () {
				$uibModal.open({
					templateUrl: '/src/addNews/addNewsModal/addNewsModal.html',
					controller: 'addNewsModalCtrl',
					controllerAs: 'addNews'
				})
			};

			// //user
			// $scope.openReferenceModal = function () {
			// 	$uibModal.open({
			// 		templateUrl: '/src/alerts/myNews/referenceModal/referenceModal.html',
			// 		controller: 'referenceModalCtrl',
			// 		controllerAs: 'reference'
			// 	})
			// };

			// //TO DO
			// $scope.sendNews = function () {
			// 	alert("TODO: Send news");
			// };


			//admin


			$scope.openDeleteNewsModal = function (index) {

				var modalInstance = $uibModal.open({

					templateUrl: '/src/alerts/deleteNews/deleteNewsModal/deleteNewsModal.html',
					controller: 'deleteNewsModalCtrl',
					controllerAs: 'deleteNews'
				});

				modalInstance.result.then(function (param) {
					if(param){
						$scope.newsItems[index].deleted=true;
						//document.getElementById(index).setAttribute('class','deleted-news');
						newsItemsService.setNewsItemsArray(JSON.stringify($scope.newsItems));
						//$scope.a=document.getElementById(index).className;
					}
				});
			};

			$scope.openEditPendingNewsModal = function () {
				$uibModal.open({
					templateUrl: '/src/alerts/deleteNews/editPendingNewsModal/editPendingNewsModal.html',
					controller: 'editPendingNewsModalCtrl',
					controllerAs: 'editPendingNews'
				})
			};

			//TO DO
			$scope.savePendingNews = function () {
				alert("TODO: save Pending News");
			};

			//  $scope.deleteNewsItem = function (index) {
			// // 	$scope.index = $(event.target).attr("id");
			// // 	console.log('$(event.target).attr("id")+'+$(event.target).attr("id"))
			// // 	newsItemsService.deleteNewsItem($scope.newsItems, $scope.index)
			// 	 console.log('index+'+index);
			//  };
			//
		}])

})();



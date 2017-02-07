(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['newsItemsService','$scope', '$uibModal', function (newsItemsService,$scope, $uibModal) {

			$scope.role = 'user';
			$scope.newsStatus = 'notApproved';
			$scope.newsItems =newsItemsService.newsItemsArray;

			$scope.openAddNewsModal = function () {
				$uibModal.open({
					templateUrl: '/src/addNews/addNewsModal.html',
					controller: 'addNewsModalCtrl',
					controllerAs: 'addNews'
				})
			};

			//user
			$scope.openReferenceModal = function () {
				$uibModal.open({
					templateUrl: '/src/alerts/myNews/referenceModal/referenceModal.html',
					controller: 'referenceModalCtrl',
					controllerAs: 'reference'
				})
			};

			//TO DO
			$scope.sendNews = function () {
				alert("TODO: Send news");
			};
			//TO DO
			$scope.deleteNews = function () {
				alert("TODO: Delete news");
			};


			//admin
			$scope.openDeletePendingNewsModal = function () {
				$uibModal.open({
					templateUrl: '/src/alerts/pendingNews/deletePendingNewsModal/deletePendingNewsModal.html',
					controller: 'deletePendingNewsModalCtrl',
					controllerAs: 'deletePendingNews'
				})
			};
			$scope.openEditPendingNewsModal = function () {
				$uibModal.open({
					templateUrl: '/src/alerts/pendingNews/editPendingNewsModal/editPendingNewsModal.html',
					controller: 'editPendingNewsModalCtrl',
					controllerAs: 'editPendingNews'
				})
			};

			//TO DO
			$scope.savePendingNews = function () {
				alert("TODO: save Pending News");
			};

		}]);
})();



(function () {
	'use strict';

	angular.module('NewsFeed').controller('pendingNewsCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
		$scope.news = {
			author: 'John Doe',
			summary: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. ",
			tag: '#accident',
			text: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.",
			theme: 'Belarus',
			time: '11:25',
			title: 'Accident'
		};
		$scope.openDeleteModal = function () {
			$uibModal.open({
				templateUrl: '/src/alerts/pendingNews/deletePendingNewsModal/deletePendingNewsModal.html',
				controller: 'deletePendingNewsModalCtrl'
			})
		};
		$scope.openEditModal = function () {
			$uibModal.open({
				templateUrl: '/src/alerts/pendingNews/editPendingNewsModal/editPendingNewsModal.html',
				controller: 'editPendingNewsModalCtrl'
			})
		};
		$scope.openAddNewsModal = function () {
			$uibModal.open({
				templateUrl: '/src/addNews/addNewsModal.html',
				controller: 'addNewsModalCtrl'
			})
		};
		//TO DO
		$scope.savePendingNews=function(){
			alert("TODO: save Pending News");
		};
	}]);
})();
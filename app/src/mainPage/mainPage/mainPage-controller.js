(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
//Page view depending on the role and news status

			$scope.role = 'admin';
			$scope.newsStatus = 'pending';

			var newsCard = document.getElementById('newsCardId');
			var adminBottomPanel = document.getElementById('adminBottomPanelId');
			var userBottomPanel = document.getElementById('userBottomPanelId');
			var addButton = document.getElementById('addButtonId');

			if ($scope.role === 'admin') {
				newsCard.setAttribute('class', 'adminView jumbotron col-md-8 col-md-offset-2');
				adminBottomPanel.removeAttribute('class', 'hidden');
				adminBottomPanel.setAttribute('class', 'col-md-4 col-md-offset-8');
				addButton.removeAttribute('class', 'hidden');
				addButton.setAttribute('class', 'btn btn-default btn-lg addButton');
			}
			else if ($scope.role === 'user') {
				if ($scope.newsStatus == 'pending') {
					newsCard.setAttribute('class', 'userViewPendingNews jumbotron col-md-8 col-md-offset-2');
				}
				if ($scope.newsStatus === 'notApproved') {
					userBottomPanel.removeAttribute('class', 'hidden');
					userBottomPanel.setAttribute('class', 'col-md-4 col-md-offset-8');
					newsCard.setAttribute('class', 'userViewNotApprovedNews jumbotron col-md-8 col-md-offset-2');
				}
				if ($scope.newsStatus == 'approved') {
					console.log('class=userViewApprovedNews');
					newsCard.setAttribute('class', 'userViewApprovedNews jumbotron col-md-8 col-md-offset-2');
				}
				addButton.removeAttribute('class', 'hidden');
				addButton.setAttribute('class', 'btn btn-default btn-lg addButton');
			}

			$scope.news = {
				author: 'John Doe',
				summary: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. ",
				tag: '#accident',
				text: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.",
				theme: 'Belarus',
				time: '11:25',
				title: 'Accident'
			};
			$scope.openAddNewsModal = function () {
				$uibModal.open({
					templateUrl: '/src/addNews/addNewsModal.html',
					controller: 'addNewsModalCtrl'
				})
			};

			//user
			$scope.openReferenceModal = function () {
				$uibModal.open({
					templateUrl: '/src/alerts/myNews/referenceModal/referenceModal.html',
					controller: 'referenceModalCtrl'
				})
			};
			$scope.openAddNewsModal = function () {
				$uibModal.open({
					templateUrl: '/src/addNews/addNewsModal.html',
					controller: 'addNewsModalCtrl'
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
					controller: 'deletePendingNewsModalCtrl'
				})
			};
			$scope.openEditPendingNewsModal = function () {
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
			$scope.savePendingNews = function () {
				alert("TODO: save Pending News");
			};

		}]);
})();



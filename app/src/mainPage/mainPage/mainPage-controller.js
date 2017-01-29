(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('mainPageCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
//Page view depending on the role
			$scope.role='admin';
			var newsCardId=document.getElementById('newsCardId');
			var bottomPanelId=document.getElementById('bottomPanelId');
			var addButtonId=document.getElementById('addButtonId');
			var authorDateId=document.getElementById('authorDateId');
			if($scope.role==='admin'){
				console.log('class=adminView');
				//newsCardId.setAttribute('class','adminView');
				//bottomPanelId.removeAttribute('class','hidden').setAttribute('class','adminViewButton');
				//addButtonId.removeAttribute('class','hidden');
			}
			else if($scope.role==='user'){
				if($scope.newsStatus=='pending'){
					console.log('class=userViewPendingNews');
					//newsCardId.setAttribute('class','userViewPendingNews');
				}
				if($scope.newsStatus=='notApproved'){
					console.log('class=userViewNotApprovedNews');
					//newsCardId.setAttribute('class','userViewNotApprovedNews');
					// bottomPanelId.removeAttribute('class','hidden').setAttribute('class','adminViewButton');
				}
				if($scope.newsStatus=='approved'){
					console.log('class=userViewApprovedNews');
					//newsCardId.setAttribute('class','userViewApprovedNews');
				}
				//addButtonId.removeAttribute('class','hidden');
			}
			else {
				console.log('class=unregisteredView');
				//newsCardId.setAttribute('class','unregisteredView');
				//bottomPanelId.setAttribute('class','unregisteredView');
			}

			$scope.news = {
				author: 'John Doe',
				summary: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. ",
				tag:'#accident',
				text: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.",
				theme:'Belarus',
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
			}

			
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
			$scope.savePendingNews=function(){
				alert("TODO: save Pending News");
			};

		}]);
})();



(function(){
'use strict';

angular.module('NewsFeed').controller('myNewsCtrl',['$scope','$uibModal', function ($scope,$uibModal) {
	$scope.news = {
		author: 'John Doe',
		summary: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. ",
		tag:'#accident',
		text: "Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east. Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.Day reappeared. The tempest still raged with undiminished fury; but the window returned to the south-east.",
		theme:'Belarus',
		time: '11:25',
		title: 'Accident'
	};
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
}]);
})();
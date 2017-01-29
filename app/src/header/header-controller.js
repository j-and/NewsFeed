(function () {
	'use strict';
	angular.module('NewsFeed')
		.controller('headerCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
			//Header view depending on the alerts
			$scope.alerts = true;
			var exclamationSignIconId = document.getElementById('exclamationSignIconId');

			if ($scope.alerts === true) {
				console.log('there are some alerts');
				//exclamationSignIconId.removeAttribute('class','hidden');
			}

			$scope.openProfileModal = function () {
				if (($scope.role != 'admin') || ($scope.role != 'user')) {
					$uibModal.open({
						templateUrl: '/src/header/profileModal/profileModal.html',
						controller: 'profileModalCtrl'
					})
				}
				else {
					$uibModal.open({
						templateUrl: '/src/header/editProfileModal/editProfileModal.html',
						controller: 'editProfileModalCtrl'
					})
				}
			};
			//TO DO
			$scope.search = function () {
				alert('TODO: Search');
			};
			//TO DO
			$scope.signOut = function () {
				alert('TODO: signOut');
			}
		}]);
})();

(function () {
	'use strict';
	angular.module('NewsFeed', ['ui.bootstrap'])
		.controller('headerCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
			$scope.openProfileModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/profileModal/profileModal.html',
					controller: 'profileModalCtrl'
				})
			}
		}]);
})();

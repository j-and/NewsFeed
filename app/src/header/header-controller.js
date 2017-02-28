(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['newsItemsService', '$scope', '$uibModal', function (newsItemsService, $scope, $uibModal) {
			$scope.role = 'user';
			
			$scope.openLoginModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/loginModal/loginModal.html',
					controller: 'loginModalCtrl',
					controllerAs: 'profile'
				});
			};
			$scope.openEditProfileModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/editProfileModal/editProfileModal.html',
					controller: 'editProfileModalCtrl',
					controllerAs: 'editProfile'
				})
			};
		
			//$scope.newsItems=newsItemsService.newsItemsArrayDefault;
			$scope.newsItems = newsItemsService.getNewsItemsArray();
			
			$scope.signOut = function () {
				$scope.role = '';
			};
		}]);
})
();

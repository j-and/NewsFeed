(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('addNewsButtonCtrl', ['$scope', '$uibModal', function ( $scope, $uibModal) {

			$scope.role = 'user';

			$scope.openAddNewsModal = function () {
				$uibModal.open({
					templateUrl: '/src/addNews/addNewsModal/addNewsModal.html',
					controller: 'addNewsModalCtrl',
					controllerAs: 'addNews'
				})
			};


		}]);
})();



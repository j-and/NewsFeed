(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('deleteUserModalCtrl',['$uibModalInstance', function ($uibModalInstance) {
			var vm = this;
			
//TO DO
			vm.deleteUser = function () {
				alert('TODO: Delete User');
				$uibModalInstance.dismiss('cancel');
			};
			vm.closeModal = function () {
				alert('TODO: Close Modal');
				$uibModalInstance.dismiss('cancel');
			};
		}]);
})();
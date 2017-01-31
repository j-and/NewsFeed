(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('editProfileModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
			var vm = this;

//TO DO
			vm.saveEditProfile = function () {
				alert('TO DO: Save edit profile');
				$uibModalInstance.dismiss('cancel');
			};
		}]);
})();
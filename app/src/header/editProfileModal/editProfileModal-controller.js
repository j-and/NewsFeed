(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('editProfileModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
			var vm = this;

			/**
			 * @ngdoc function
			 * @name saveEditProfile
			 * @description save editted profile
			 * @param
			 * @returns
			 */
			vm.saveEditProfile = function () {
				//	alert('TO DO: Save edit profile');
				$uibModalInstance.dismiss('cancel');
			};
		}]);
})();
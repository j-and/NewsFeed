(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('deleteUserModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
			var vm = this;
			/**
			 * @ngdoc function
			 * @name closeModal
			 * @description close modal
			 * @param
			 * @returns
			 */
			vm.closeModal = function () {
				$uibModalInstance.close();
			};
		}]);
})();

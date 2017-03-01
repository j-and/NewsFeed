(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('deleteNewsModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
			var vm = this;

			/**
			 * @ngdoc function
			 * @name closeModal
			 * @description close delete news modal
			 * @param
			 * @returns
			 */
			vm.closeModal = function () {
				$uibModalInstance.close();
			};
		}]);
})();


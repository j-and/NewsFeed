(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('referenceModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
			var vm = this;

			//TO DO
			vm.closeModal = function () {
				alert("TODO: Close modal");
				$uibModalInstance.dismiss('cancel');
			};
		}]);
})();
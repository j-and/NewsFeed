(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('deleteNewsModalCtrl', ['$uibModalInstance', function ( $uibModalInstance) {
			var vm = this;

			vm.closeModal = function () {
				$uibModalInstance.close();
			};
		}]);
})();


(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('deleteNewsModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
			var vm = this;

			//TO DO
			vm.saveComment = function () {
				alert('Save comment');
				$uibModalInstance.dismiss('cancel');
			};
		}]);
})();
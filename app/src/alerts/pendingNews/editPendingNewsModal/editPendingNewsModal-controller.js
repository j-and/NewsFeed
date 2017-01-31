(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('editPendingNewsModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
			var vm = this;

			//TO DO
			vm.saveNews = function () {
				alert('TODO: Save added news');
				$uibModalInstance.dismiss('cancel');
			};
		}]);
})();
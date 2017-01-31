(function () {
	'use strict';
	
	angular.module('NewsFeed')
		.controller('addNewsModalCtrl', ['$uibModalInstance', function ($uibModalInstance) {
			var vm = this;

			//TO DO
			vm.saveNews = function () {
				alert('TODO: Save news');
				$uibModalInstance.dismiss('cancel');
			}
		}]);
})();
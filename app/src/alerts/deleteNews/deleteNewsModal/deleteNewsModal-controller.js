(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('deleteNewsModalCtrl', ['newsItemsService', '$uibModalInstance', function (newsItemsService, $uibModalInstance) {
			var vm = this;
			//vm.usersArray=usersService.usersArrayDefault;
			vm.NewsItemsArray = newsItemsService.getNewsItemsArray();

			vm.closeModal = function () {
				$uibModalInstance.close();
			};

			vm.deleteNewsItem = function (param) {
				$uibModalInstance.close(param);
			};

		}]);
})();


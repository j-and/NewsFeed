(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('errorCtrl', ['errorService', function (errorService) {
			var vm = this;
			vm.message = errorService.getErrorMessage();
		}]);
})
();

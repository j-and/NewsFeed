(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('errorCtrl', ['errorService','$q', function (errorService,$q) {
			var vm = this;

			vm.message = errorService.getErrorMessage();
			// $q.when(errorService.getErrorMessage().then(function() {
			// 	//$rootScope.status = result.status;
			// 	//vm.message = errorService.getErrorMessage();
			// 	console.log('aa='+errorService.getErrorMessage())
			// })
			// )
		}]);
})
();

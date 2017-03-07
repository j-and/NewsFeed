(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('errorCtrl', ['errorService','$q', function (errorService,$q) {
			var vm = this;

			$q.when(errorService.getErrorMessage().then(function(result) {
					vm.message=result.message;
			})
			)
		}]);
})
();

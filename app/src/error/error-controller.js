(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('errorCtrl', ['errorService', '$scope', function (errorService, $scope) {
			$scope.message = errorService.getErrorMessage();
		}]);
})
();

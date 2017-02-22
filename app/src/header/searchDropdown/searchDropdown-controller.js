(function () {
	'use strict';
	angular.module('NewsFeed')
		.controller('searchdropdownCtrl', ['$scope', 'Query', function ($scope, Query) {
			$scope.Query = Query;
		}]);
})();
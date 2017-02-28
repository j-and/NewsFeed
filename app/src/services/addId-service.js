(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('addIdService', [function () {
			var createId = function (array) {
				return array.length;
			};
			return {
				createId: createId
			}
		}]);
})();

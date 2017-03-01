(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('addIdService', [function () {

			/**
			 * @ngdoc function
			 * @name createId
			 * @description creates id
			 * @param (array)
			 * @returns (createdId)
			 */
			var createId = function (array) {
				return array.length;
			};
			return {
				createId: createId
			}
		}]);
})();

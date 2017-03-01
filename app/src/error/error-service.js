(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('errorService', [function () {

			var errorMessage;

			/**
			 * @ngdoc function
			 * @name setErrorMessage
			 * @description sets error message
			 * @param (message)
			 */
			var setErrorMessage = function (message) {
				errorMessage = message;
			};

			/**
			 * @ngdoc function
			 * @name getErrorMessage
			 * @description gets error message
			 * @returns(errorMessage)
			 */
			var getErrorMessage = function () {
				return errorMessage;
			};

			return {
				getErrorMessage: getErrorMessage,
				setErrorMessage: setErrorMessage
			};
		}
		]);
})
();

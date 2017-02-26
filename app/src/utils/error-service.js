(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('errorService', [function () {

			var errorMessage;

			var setErrorMessage = function (message) {
				errorMessage = message;
			};

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

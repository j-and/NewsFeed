(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('errorService', ['$q','$timeout',function ($q,$timeout) {
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

					// //
					// console.log('error');
					//  var errorMessage = message;
					// var deferral = $q.defer();
					// $timeout(function() {
					// 	deferral.resolve( setErrorMessage(message) );
					// }, 1000);
					// return deferral.promise;
					return errorMessage;
				};

				return {
					getErrorMessage: getErrorMessage,
					setErrorMessage: setErrorMessage
				};
			}
			]);

		//
		// 	
// 		.controller("errorCtrl",['$scope', '$q', function ($scope, $q) {
// //console.log('aa')
// // 			$q.when(noPromise.getResult()).then(function(result) {
// // 				$rootScope.status = result.status;
// // 			});
// 		}])



})
();

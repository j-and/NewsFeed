(function () {
	'use strict';

	angular.module('NewsFeed')
		.factory('errorService', ['$q',function ($q) {
			var errorMessage;
			var vm=this;

				/**
				 * @ngdoc function
				 * @name setErrorMessage
				 * @description sets error message
				 * @param (message)
				 */
				var setErrorMessage = function (message) {
					// console.log('message='+message);
					errorMessage = message;
				};

				/**
				 * @ngdoc function
				 * @name getErrorMessage
				 * @description gets error message
				 * @returns(errorMessage)
				 */
				var getErrorMessage = function () {
					var deferral = $q.defer();
						deferral.resolve( {message:errorMessage} );
					return deferral.promise;
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

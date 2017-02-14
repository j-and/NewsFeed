(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('footerCtrl', ['$scope', function ($scope) {

			$scope.footer = {
				author: 'Yauheniya Astrouskaya',
				email: 'yastrouskaya@exadel.com',
				date: new Date().toLocaleDateString()
			};
		}]);
})();

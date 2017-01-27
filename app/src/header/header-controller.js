(function () {
	'use strict';
	angular.module('NewsFeed')
		.controller('headerCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
			$scope.openProfileModal = function () {
				var signedIn=true;
				if(signedIn==true){
					$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

					$uibModal.open({
					templateUrl: '/src/header/profileModal/profileModal.html',
					controller: 'profileModalCtrl'
				})
				}
				else{
					$uibModal.open({
						templateUrl: '/src/header/editProfileModal/editProfileModal.html',
						controller: 'editProfileModalCtrl'
					})
				}
			};
		//TO DO
		$scope.search=function () {
			alert('TODO: Search');
		};
			//TO DO
			$scope.signOut=function () {
				alert('TODO: signOut');
			}
		}]);
})();

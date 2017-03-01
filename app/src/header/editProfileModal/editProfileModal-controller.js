(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('editProfileModalCtrl', ['$scope','addIdService','usersService','$uibModalInstance', function ($scope,addIdService,usersService,$uibModalInstance) {
			var vm = this;
//$scope.user=usersService.getUsersArray()[index];
// 			vm.users = usersService.getUsersArray();

			//vm.user = user;

			/**
			 * @ngdoc function
			 * @name saveEditProfile
			 * @description save editted profile		
			 */
			vm.saveEditProfile = function () {
				// vm.id=addIdService.createId(vm.users);
				// var newLogin = document.getElementById('newLogin');
				// var newEmail = document.getElementById('newEmail');
				// var newPassword = document.getElementById('newPassword');
				// var newPasswordConfirmed = document.getElementById('newPasswordConfirmed');
				// vm.date = new Date();
				// vm.user = {
				// 	date: vm.date.toLocaleDateString(),
				// 	deleted: 'false',
				// 	email: newEmail.value,
				// 	id: vm.id,
				// 	name: newLogin.value,
				// 	password: newPassword.value,
				// 	role: 'user',
				// 	status: ''
				// };
				// usersService.addEditUser(vm.user);
				$uibModalInstance.dismiss('cancel');
			};
		}]);
})();
(function () {
	'use strict';

	angular.module('NewsFeed').controller('profileModalCtrl', ['usersService', '$uibModal', '$uibModalInstance', function (usersService, $uibModal, $uibModalInstance) {

		var vm = this;

		vm.openLogIn = true;
		vm.openSignUpModal = function () {
			vm.openLogIn = false;
			vm.openSignUp = true;
		};

		vm.openLogInModal = function () {
			vm.openLogIn = true;
			vm.openSignUp = false;
		};

		//TO DO
		vm.forgotPassword = function () {
			alert('TO DO: forgot password');

		};
		//TO DO
		vm.logIn = function () {
			alert('TO DO: Log in');
			$uibModalInstance.dismiss('cancel');
		};

		//TO DO
		vm.signUp = function () {
			alert('TO DO: Sign up');
			var newUserEmail = document.getElementById('newUserEmail');
			var newUserPassword = document.getElementById('newUserPassword');
			vm.date = new Date();

			var user = {
				date: vm.date.toLocaleDateString(),
				email: newUserEmail.value,
				id: '',
				name: newUserEmail.value.split('@')[0],
				password: newUserPassword.value,
				role: 'user',
				status: 'pending'
			};

			usersService.addUser(user);
			$uibModalInstance.dismiss('cancel');
		};
	}]);
})();

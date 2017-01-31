(function () {
	'use strict';

	angular.module('NewsFeed').controller('profileModalCtrl', ['$uibModal', '$uibModalInstance', function ($uibModal, $uibModalInstance) {

		var vm = this;

		vm.openLogIn = true;
		vm.openSignUpModal = function () {
			vm.openLogIn = false;
			vm.openSignUp = true;
		};

		vm.openLogInModal = function () {
			$ctrl.openLogIn = true;
			$ctrl.openSignUp = false;
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
			$uibModalInstance.dismiss('cancel');
		};
	}]);
})();

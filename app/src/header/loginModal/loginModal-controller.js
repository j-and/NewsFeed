(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('loginModalCtrl', ['$uibModalInstance', '$scope', 'addIdService', 'usersService', '$uibModal', function ($uibModalInstance, $scope, addIdService, usersService) {
			$scope.login = {
				email: '',
				password: ''
			}
			var vm = this;
			//vm.users=usersService.usersArrayDefault;
			vm.users = usersService.getUsersArray();

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
			vm.logIn = function () {
				for (var i = 0; i < vm.users.length; i++) {
					if (vm.users[i].email === $scope.login.email && vm.users[i].password === $scope.login.password) {
						$scope.role = 'user';
						usersService.setRole($scope.role);
					}
				}
				$uibModalInstance.dismiss('cancel');
			};

			vm.signUp = function () {
				vm.id = addIdService.createId(vm.users);
				var newUserEmail = document.getElementById('newUserEmail');
				var newUserPassword = document.getElementById('newUserPassword');
				vm.date = new Date();

				var user = {
					date: vm.date.toLocaleDateString(),
					deleted: false,
					email: newUserEmail.value,
					id: vm.id,
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

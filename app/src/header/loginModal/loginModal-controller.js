(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('loginModalCtrl', ['$uibModalInstance', '$scope', 'addIdService', 'usersService', '$uibModal', function ($uibModalInstance, $scope, addIdService, usersService) {
			$scope.login = {
				email: '',
				password: ''
			}

			var vm = this;
			vm.users = usersService.getUsersArray();

			vm.openLogIn = true;

			/**
			 * @ngdoc function
			 * @name openLogInModal
			 * @description open signup modal
			 * @param
			 * @returns
			 */
			vm.openSignUpModal = function () {
				vm.openLogIn = false;
				vm.openSignUp = true;
			};

			/**
			 * @ngdoc function
			 * @name openLogInModal
			 * @description open login modal
			 * @param
			 * @returns
			 */
			vm.openLogInModal = function () {
				vm.openLogIn = true;
				vm.openSignUp = false;
			};

			//TO DO
			vm.forgotPassword = function () {
				alert('TO DO: forgot password');

			};

			/**
			 * @ngdoc function
			 * @name logIn
			 * @description check if user is in usersList
			 * @param
			 * @returns
			 */
			vm.logIn = function () {
				for (var i = 0; i < vm.users.length; i++) {
					if (vm.users[i].email === $scope.login.email && vm.users[i].password === $scope.login.password) {
						$scope.role = 'user';
						usersService.setRole($scope.role);
					}
				}
				$uibModalInstance.dismiss('cancel');
			};

			/**
			 * @ngdoc function
			 * @name signUp
			 * @description create new user
			 * @param
			 * @returns
			 */
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

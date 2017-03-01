(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('loginModalCtrl', ['$uibModalInstance', '$scope', 'addIdService', 'usersService', '$uibModal', function ($uibModalInstance, $scope, addIdService, usersService) {

			var vm = this;

			vm.signUp = {
				email: '',
				password: ''
			};

			vm.login = {
				email: '',
				password: ''
			};

			vm.users = usersService.getUsersArray();

			vm.openLogIn = true;

			/**
			 * @ngdoc function
			 * @name openLogInModal
			 * @description open signup modal
			 */
			vm.openSignUpModal = function () {
				vm.openLogIn = false;
				vm.openSignUp = true;
			};

			/**
			 * @ngdoc function
			 * @name openLogInModal
			 * @description open login modal
			 */
			vm.openLogInModal = function () {
				vm.openLogIn = true;
				vm.openSignUp = false;
			};

			//TO DO
			vm.forgotPassword = function () {
			};

			/**
			 * @ngdoc function
			 * @name logIn
			 * @description check if user is in usersList
			 */
			vm.logIn = function () {
				for (var i = 0; i < vm.users.length; i++) {
					if (vm.users[i].email === vm.login.email && vm.users[i].password === vm.login.password) {
						$scope.role = 'user';
						usersService.setRole($scope.role);
					}
				}
				$uibModalInstance.dismiss('cancel');
			};

			/**
			 * @ngdoc function
			 * @name signUp
			 * @description create new pending user
			 */
			vm.signUp = function () {
				vm.id = addIdService.createId(vm.users);
				vm.date = new Date();

				var user = {
					date: vm.date.toLocaleDateString(),
					deleted: 'false',
					email: vm.signUp.email,
					id: vm.id,
					name: vm.signUp.email.split('@')[0],
					password: vm.signUp.password,
					role: 'user',
					status: 'pending'
				};
				usersService.addUser(user);
				$uibModalInstance.dismiss('cancel');
			};
		}]);
})();

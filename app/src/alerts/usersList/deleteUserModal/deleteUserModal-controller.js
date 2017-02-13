(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('deleteUserModalCtrl',['usersService','$uibModalInstance', function (usersService,$uibModalInstance) {
			var vm = this;
			//vm.usersArray=usersService.usersArrayDefault;
			vm.usersArray=usersService.getUsersArray();

			// vm.deleteUser = function (event) {
			// 	vm.index = $(event.target).attr("id");
			// 	//if(event){
			// 		usersService.deleteUser(vm.usersArray, vm.index);
			// 	//}
			// 	$uibModalInstance.dismiss('cancel');
			//
			// };
			vm.closeModal = function () {
				$uibModalInstance.dismiss('cancel');
			};
		}]);
})();


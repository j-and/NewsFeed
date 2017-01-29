(function () {
	'use strict';

	angular.module('NewsFeed').controller('profileModalCtrl', ['$uibModal', '$log', '$document', function ($uibModal, $log, $document) {
		var $ctrl = this;

		var logInModalBodyId=document.getElementById("logInModalBodyId");
		var signUpModalBodyId=document.getElementById("signUpModalBodyId");
		var logInTitle=document.getElementById("logInTitle");
		var signUpTitle=document.getElementById("signUpTitle");
		//Login modal view in dependence of unregistered user choice
		$ctrl.openSignUpModal=function(){
			console.log('sign up is chosen');
			logInModalBodyId.setAttribute("class","hidden");
			signUpModalBodyId.removeAttribute("class","hidden");
			logInTitle.innerHTML='<a href="">Log in</a>';
			signUpTitle.innerHTML='<h3>Sign up</h3>';
		};

		$ctrl.openLogInModal=function() {
				console.log('log in is chosen');
				logInModalBodyId.removeAttribute("class", "hidden");
				signUpModalBodyId.setAttribute("class", "hidden");
				logInTitle.innerHTML = '<h3>Log in</h3>';
				signUpTitle.innerHTML = '<a href="">Sign up</a>';
		};

		$ctrl.items = ['item1', 'item2', 'item3'];

		$ctrl.animationsEnabled = true;

		$ctrl.open = function (size, parentSelector) {
			var parentElem = parentSelector ?
				angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
			var modalInstance = $uibModal.open({
				animation: $ctrl.animationsEnabled,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'myModalContent.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: '$ctrl',
				size: size,
				appendTo: parentElem,
				resolve: {
					items: function () {
						return $ctrl.items;
					}
				}
			});

			modalInstance.result.then(function (selectedItem) {
				$ctrl.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
		//TO DO
		$ctrl.forgotPassword = function () {
			alert('TO DO: forgot password');
			
		};
		//TO DO
		$ctrl.logIn = function () {
			alert('TO DO: Log in');
		};

		//TO DO
		$ctrl.signUp = function () {
			alert('TO DO: Sign up');
		};
	}]);
})();

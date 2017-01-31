(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('deleteUserModalCtrl', function ($uibModal, $log, $document) {
			var $ctrl = this;
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
			$ctrl.deleteUser = function () {
				alert('TODO: Delete User');
			};
			$ctrl.closeModal = function () {
				alert('TODO: Close Modal');
			};
		});
})();
(function () {
  'use strict';

  angular.module('NewsFeed')
      .controller('deleteUserModalCtrl', ['$uibModalInstance',function ($uibModalInstance) {
var vm=this;
          vm.closeModal = function () {
              $uibModalInstance.close();
          };
      }]);
})();

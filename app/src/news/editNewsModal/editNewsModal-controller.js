(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('editNewsModalCtrl', ['addIdService', 'newsItemsService', '$uibModalInstance', '$scope', 'newsItem', 'index', function (addIdService, newsItemsService, $uibModalInstance, $scope, newsItem, index) {
			var vm = this;

			vm.newsItems = newsItemsService.getNewsItemsArray();

			vm.editNewsItem={
				author:newsItem.author,
				summary:newsItem.summary,
				tag:newsItem.tag,
				text:newsItem.text,
				title:newsItem.title
			};

			//$scope.newsItem = newsItem;

			/**
			 * @ngdoc function
			 * @name openEditNewsModal
			 * @description open edit news modal
			 */
			vm.saveNews = function () {
				vm.date = new Date();
				newsItem = {
					author: vm.editNewsItem.author,
					date: vm.date.toLocaleDateString(),
					deleted: 'false',
					id: vm.newsItems[index].id,
					summary: vm.editNewsItem.summary,
					tag: vm.editNewsItem.tag,
					text: vm.editNewsItem.text,
					title: vm.editNewsItem.title
				};
				newsItemsService.addEditNewsItem(newsItem);
				$uibModalInstance.dismiss('cancel');
			};


		}])
})();
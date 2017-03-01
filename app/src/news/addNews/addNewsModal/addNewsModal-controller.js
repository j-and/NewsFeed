(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('addNewsModalCtrl', ['addIdService', 'newsItemsService', '$uibModalInstance', function (addIdService, newsItemsService, $uibModalInstance) {
			var vm = this;

			vm.newsItems = newsItemsService.getNewsItemsArray();

			vm.addNewsItem={
				author:'',
				summary:'',
				tag:'',
				text:'',
				title:''
			};

			/**
			 * @ngdoc function
			 * @name saveNews
			 * @description save new newsItem
			 */
			vm.saveNews = function () {
				vm.id = addIdService.createId(vm.newsItems);
				vm.date = new Date();

				var newsItem = {
					author: vm.addNewsItem.author,
					date: vm.date.toLocaleDateString(),
					deleted: 'false',
					id: vm.id,
					summary: vm.addNewsItem.summary,
					tag: vm.addNewsItem.tag,
					text: vm.addNewsItem.text,
					title: vm.addNewsItem.title
				};
				newsItemsService.addNewsItem(newsItem);
				$uibModalInstance.dismiss('cancel');
			};
		}])
})();
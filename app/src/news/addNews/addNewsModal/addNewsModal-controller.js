(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('addNewsModalCtrl', ['addIdService', 'newsItemsService', '$uibModalInstance', function (addIdService, newsItemsService, $uibModalInstance) {
			var vm = this;

			vm.newsItems = newsItemsService.getNewsItemsArray();

			/**
			 * @ngdoc function
			 * @name saveNews
			 * @description save new newsItem
			 * @param
			 * @returns
			 */
			vm.saveNews = function () {
				vm.id = addIdService.createId(vm.newsItems);
				var newsItemAuthor = document.getElementById('newsItemAuthor');
				var newsItemSummary = document.getElementById('newsItemSummary');
				var newsItemTag = document.getElementById('newsItemTag');
				var newsItemText = document.getElementById('newsItemText');
				var newsItemTitle = document.getElementById('newsItemTitle');
				vm.date = new Date();

				var newsItem = {
					author: newsItemAuthor.value,
					date: vm.date.toLocaleDateString(),
					deleted: 'false',
					id: vm.id,
					summary: newsItemSummary.value,
					tag: newsItemTag.value,
					text: newsItemText.value,
					title: newsItemTitle.value
				};

				newsItemsService.addNewsItem(newsItem);
				$uibModalInstance.dismiss('cancel');
			};
		}])
})();
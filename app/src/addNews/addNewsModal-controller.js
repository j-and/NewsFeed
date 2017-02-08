(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('addNewsModalCtrl', ['newsItemsService', '$uibModalInstance', function (newsItemsService, $uibModalInstance) {
			var vm = this;

			vm.saveNews = function () {

				var newsItemAuthor = document.getElementById('newsItemAuthor');
				var newsItemSummary = document.getElementById('newsItemSummary');
				var newsItemTag = document.getElementById('newsItemTag');
				var newsItemText = document.getElementById('newsItemText');
				var newsItemTitle = document.getElementById('newsItemTitle');

				var newsItem = {
					author: newsItemAuthor.value,
					summary: newsItemSummary.value,
					tag: newsItemTag.value,
					text: newsItemText.value,
					title: newsItemTitle.value
				};

				vm.createNewsId();
				newsItemsService.addNewsItem(newsItem);
				$uibModalInstance.dismiss('cancel');
			};



		}
		])
})();
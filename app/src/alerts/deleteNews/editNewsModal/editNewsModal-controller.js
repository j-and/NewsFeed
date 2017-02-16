(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('editNewsModalCtrl', ['addIdService', 'newsItemsService', '$uibModalInstance', '$scope', 'newsItem', 'index', function (addIdService, newsItemsService, $uibModalInstance, $scope, newsItem, index) {
			var vm = this;

			//vm.newsItems=newsItemsService.newsItemsArrayDefault;
			vm.newsItems = newsItemsService.getNewsItemsArray();

			$scope.newsItem = newsItem;

			vm.saveNews = function (newsItem) {
				vm.id = addIdService.createId(vm.newsItems);
				var newsItemAuthor = document.getElementById('newsItemAuthor');
				var newsItemSummary = document.getElementById('newsItemSummary');
				var newsItemTag = document.getElementById('newsItemTag');
				var newsItemText = document.getElementById('newsItemText');
				var newsItemTitle = document.getElementById('newsItemTitle');
				vm.date = new Date();

				newsItem = {
					author: newsItemAuthor.value,
					date: vm.date.toLocaleDateString(),
					deleted: 'false',
					id: vm.id,
					newsStatus: 'pending',
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
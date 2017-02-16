(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('editNewsModalCtrl', ['addIdService','newsItemsService', '$uibModalInstance','newsItem', function (addIdService,newsItemsService, $uibModalInstance,newsItem) {
			var vm = this;

			//vm.newsItems=newsItemsService.newsItemsArrayDefault;
			vm.newsItems=newsItemsService.getNewsItemsArray();


			vm.newsItem = newsItem;



			console.log('vm.newsItem+'+vm.newsItem.author);


			vm.saveNews = function () {
				console.log('index+'+newsItem.author);

				vm.id=addIdService.createId(vm.newsItems);
				var newsItemAuthor = document.getElementById('newsItemAuthor');
				var newsItemSummary = document.getElementById('newsItemSummary');
				var newsItemTag = document.getElementById('newsItemTag');
				var newsItemText = document.getElementById('newsItemText');
				var newsItemTitle = document.getElementById('newsItemTitle');
				vm.date = new Date();



				newsItem = {
					author: newsItemAuthor.value,
					date: vm.date.toLocaleDateString(),
					deleted:'false',
					id: vm.id,
					newsStatus:'pending',
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
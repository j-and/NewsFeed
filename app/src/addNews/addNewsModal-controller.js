(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('addNewsModalCtrl', ['newsItemsService', '$uibModalInstance', function (newsItemsService, $uibModalInstance) {
			var vm = this;
			var count=0;
			vm.news = [
				{
					title: "1Title1",
					author: "John Doe",
					date: '',
					id: '',
					img: '',
					summary: '',
					tag: '#USA',
					text: '',
					theme: ''
				},
				{title: "1Title10", author: "John Doe"},
				{title: "2Title100", author: "John Doe"},
				{title: "2Title10000", author: "John Doe"},
				{title: "2Title10001"}
			];
		
			//TO DO
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
				newsItemsService.addNewsItem(newsItem);
				$uibModalInstance.dismiss('cancel');
			};

			

		}]);
})();
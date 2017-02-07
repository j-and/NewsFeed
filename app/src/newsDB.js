(function () {
	'use strict';
	angular.module('NewsFeed')
		.factory('newsItemsService', [function () {
			var newsItemsArray = [
				{
					title: "1Title1",
					author: "Paul Smith",
					date: '',
					id: '',
					img: '',
					summary: '',
					tag: '#Belarus',
					text: '',
					theme: ''
				},
				{title: "1Title10", author: "John Doe"},
				{title: "2Title100", author: "Paul Smith"},
				{title: "2Title10000", author: "John Doe"},
				{title: "2Title10001"}
			];
			return {
				newsItemsArray: newsItemsArray,

				getNewsItem: function (newsItem) {
					this.author = newsItem.author;
					this.date = new Date(newsItem.date);
					this.id = newsItem.id;
					this.img = newsItem.img;
					this.summary = newsItem.summary;
					this.tag = newsItem.tag;
					this.text = newsItem.text;
					this.theme = newsItem.theme;
					this.title = newsItem.title;
					console.log('newsItemsArray[0].tag+' + newsItemsArray[0].tag);
					console.log('this.tag+' + this.tag);
				},

				addNewsItem: function (object) {
					newsItemsArray.push(object);
					console.log('newsItemsArray.length+' + newsItemsArray.length);
				}
			}
		}]);
	// News.prototype.getAuthor = function (newsItemsArray) {	console.log('AAA');
	// 	return this.author;
	//
	// };
	//
	// News.prototype.getDate = function () {
	// 	return this.date;
	// };
	//
	// News.prototype.getId = function () {
	// 	return this.id;
	// };
	//
	// News.prototype.getImg = function () {
	// 	return this.img;
	// };
	//
	// News.prototype.getSummary = function () {
	// 	return this.summary;
	// };
	//
	// News.prototype.getTag = function () {
	// 	return this.tag;
	// };
	//
	// News.prototype.getText = function () {
	// 	return this.text;
	// };
	//
	// News.prototype.getTheme = function () {
	// 	return this.theme;
	// };
	//
	// News.prototype.getTitle = function () {
	// 	return this.title;
	// };
	//
	//
	//
	// News.prototype.toRawObject = function () {
	// 	return {
	// 		author: this.getAuthor(),
	// 		date: this.getDate(),
	// 		id: this.getId(),
	// 		img: this.getImg(),
	// 		summary: this.getSummary(),
	// 		tag: this.getTag(),
	// 		text: this.getText(),
	// 		theme: this.getTheme(),
	// 		title: this.getTitle()
	// 	};
	// };
	//
	//
	// News.prototype.addNewsItem =function() {
	// 	this.author = "John Smith";
	// 	this.title = "Canada";
	// };
	//
	// News.prototype.getByTitle = function( title ) {
	// 	return new NewsItem({
	// 		tag: "#USA"
	// 	});
	// };

})();
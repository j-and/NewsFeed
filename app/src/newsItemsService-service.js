(function () {
	'use strict';
	angular.module('NewsFeed')
		.factory('newsItemsService', [function () {
			var newsItemsArrayDefault = [
				{
					title: "20 travel destinations the experts say not to miss",
					author: "Danae Mercer",
					date: '10/10/2016',
					deleted:'false',
					id: '0',
					img: '',
					newsStatus: 'pending',
					summary: 'Find the isolated islands of Wayag, Indonesia',
					tag: '#World',
					text: 'Out of all the beauty that Indonesia has to offer, Wayag is perhaps the most stunning spot, says Michael Travers, head of marketing and communications at SeaTrek Sailing Adventures.' +
					'"Wayag has hundreds of thickly forested limestone karsts and islands, resulting in sheltered bays with white sand beaches and coral reefs, he says."' +
					'There arent any villages, let alone tourist accommodation, and guests can only really arrive by boat, adds Travers.' +
					'"I\'d definitely recommend climbing to the lookout point on the western side of the main Wayag Bay. It\'s not for the faint of heart (picture a 30-minute ascent through forest and over jagged limestone), but there are the most staggering views of paradise at the end."',
					theme: 'World'
				},
				{
					title: "Bernie Ecclestone: Former F1 chief swaps pit lane for ski slope",
					author: "John Doe",
					date: '11/10/2016',
					deleted:'false',
					id: '1',
					img: '',
					newsStatus: 'pending',
					summary: 'Find the isolated islands of Wayag, Indonesia',
					tag: '#Ski',
					text: 'The annual event, set up to support farming families in the Austrian state of Tyrol, takes place during the celebrated Kitzbuhel World Cup week, when the world\'s best take on the feared Hahnenkamm downhill.' +
					'The joys of winning and surviving Kitzbühel' +
					'"Have you been at the top (of the course)," Ecclestone asks CNN\'s Christina Macfarlane. "You need a lot of courage.\"' +
					'One man renowned for pushing himself to the very limits of F1 was in awe of the professional skiers hurling themselves down the "Streif" slope during the World Cup\'s showpiece downhill.' +
					'"It\'s amazing,\" Dutch F1 driver Max Verstappen told CNN after watching the action on the Hahnenkamm.',
					theme: 'Sports'
				},
				{
					title: "Lady Gaga announces world tour",
					author: "Paul Smith",
					date: '12/10/2016',
					deleted:'false',
					id: '2',
					img: '',
					newsStatus: 'pending',
					summary: 'Find the isolated islands of Wayag, Indonesia',
					tag: '#LadyGaga',
					text: 'According to a schedule posted on her official site, the concerts kick off August 1 at Rogers Arena in Vancouver and the tour winds its way across the globe before ending in Salt Lake City, Utah, on December 14.' +
					'Lady Gaga brings message of inclusion to Super Bowl halftime -- oh, and drones' +
					'Her fans, known as Gaga\'s "Little Monsters," were naturally thrilled and the singer told "Entertainment Tonight" after her halftime performance that her fans mean everything to her.' +
					'"When I first started, everyone thought we were so different and so weird,\" she said. "We never changed who we were, and we stuck to our guns in terms of what we believe in, and now we got to perform on the biggest stage in the world with our beliefs and our diversity, and it made me really proud."',
					theme: 'Entertaiment'
				},
				{title: "2Title10000", author: "John Doe", newsStatus: 'pending', id: '3',deleted:'false'},
				{title: "2Title10001", author: "Paul Smith", newsStatus: 'pending', id: '4',deleted:'false'}
			];

			var addNewsItem = function (object) {
				// 1. localStorage get arrayUsers
				// 2. parse string to array
				// 3. array.push new user
				// 4. set to local storage

				var newsItemsArrayString = localStorage.getItem("newsItemsArray");
				if (!newsItemsArrayString) {
					newsItemsArrayString = JSON.stringify(newsItemsArrayDefault);
					localStorage.setItem("newsItemsArray", newsItemsArrayString);
				}
				var newsItemsArray = JSON.parse(newsItemsArrayString);
				newsItemsArray.push(object);
				newsItemsArrayString = JSON.stringify(newsItemsArray);
				localStorage.setItem("newsItemsArray", newsItemsArrayString);
				setNewsItemsArray(newsItemsArrayString);
			};

			var setNewsItemsArray = function (array) {
				localStorage.setItem("newsItemsArray", array);
			};

			var getNewsItemsArray = function () {
				return JSON.parse(localStorage.getItem("newsItemsArray"));
			};

			var deleteNewsItem = function (array, index) {
				var idArray = [];
				for (var i = 0; i < array.length; i++) {
					idArray.push(array[i].id);
				}
				var element=document.getElementById(index);
				var itemIndex = idArray.indexOf(document.getElementById(index).id);
				array[itemIndex].property='deleted';
				for (var i = 0; i < array.length; i++) {

					if(array[i].property=='deleted'){
						document.getElementsByClassName('newsItem')[i].setAttribute('class','deleted-news');
					}
				}
				var newsItemsArrayString = JSON.stringify(array);
				setNewsItemsArray(newsItemsArrayString);
				getId(itemIndex);
			};

			var getId=function(id){
				console.log('id+'+id);
			};

			return {
				addNewsItem: addNewsItem,
				getNewsItemsArray: getNewsItemsArray,
				newsItemsArrayDefault: newsItemsArrayDefault,
				deleteNewsItem: deleteNewsItem,
				getId:getId,
				setNewsItemsArray:setNewsItemsArray
			};

		}]);
})();
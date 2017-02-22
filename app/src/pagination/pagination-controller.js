(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('paginationCtrl',['newsItemsService','searchService','$scope','$log','Query', function (newsItemsService,searchService,$scope, $log,Query) {
			$scope.newsItems = searchService.newArray;
			$scope.Query=Query;
		 	$scope.currentPage=1;
		 	$scope.itemsPerPage = 3;
			//$scope.totalPages;

			$scope.goToPreviousPage=function(event) {
				console.log('goToPreviousPage');
			}


			$scope.count=function (event) {
				var currentPage = 1;
				return function a() {
					return currentPage++;
				}
			};

				var counter = $scope.count();

			$scope.goToNextPage=function () {
				// console.log('goToNextPage');
				// console.log(counter());
				searchService.goToNextPage(counter());

				//searchService.divideToPages(counter(),newsItemsService.getNewsItemsArray());
				$scope.newsItems = searchService.perPageArray;
				console.log('$scope.newsItems+'+$scope.newsItems);
			}

		}])
})();



// function makeCounter() {
// 	var currentCount = 1;
//
// 	return function() {
// 		return currentCount++;
// 	};
// }
//
// var counter = makeCounter();
//
// // каждый вызов возвращает результат, увеличивая счётчик
// alert( counter() ); // 1
// alert( counter() ); // 2
// alert( counter() ); // 3




// var inputForm;
// var list;
// var templateBlock;
// var buttonSearch;
// var searchTerm;
// var loading;
// var message;
// var buttonNext;
// var buttonPrevious;
// var currentPage = 1;
// var pageContent;
// var pagination;
// var pageElement;
// $(document).on("DOMContentLoaded", init, event);
//
// var overlay;
//
//
// function init() {
// 	inputForm = $('#inputForm');
// 	buttonSearch = $('#buttonSearch');
// 	buttonNext = $('#buttonNext');
// 	buttonPrevious = $('#buttonPrevious');
// 	pagination = $('#pagination');
// 	pageElement = $('#pageElement');
// 	searchTerm = $('#searchTerm');
// 	loading = $('#loading');
// 	list = $('#list');
// 	message = $('#message');
// 	var sourceBlock = $('#block-template').html();
// 	buttonSearch.on("click", clearList);
// 	buttonPrevious.on("click", goToPreviousPage);
// 	buttonNext.on("click", goToNextPage);
// 	searchTerm.on("click", clearPage);
// 	GAE.filter.init(inputForm);
// 	inputForm.on("startSearch", enterSearchTerm);
//
// 	totalCount = $('#totalCount');
// 	totalCountLabel = $('#totalCountLabel');
// 	overlay = $('#overlay');
// 	GAE.modal.init();
// 	templateBlock = Handlebars.compile(sourceBlock);
//
//
//
// function clearPage() {
// 	pagination.addClass("hidden");
// 	clearList();
// 	searchTerm.val("");
// 	window.location.hash = "";
// 	totalCountLabel.html("");
// 	totalCount.html("");
// }
//
//
// })
// ();


// function loadRepoList() {
// 	message.html("Loading...");
// 	showBackground();
//
// 	GAE.utils.setParamsToUrl({
// 		query: searchTerm.val(),
// 		page: currentPage
// 	});
// 	GAE.services.requestRepos(searchTerm.val(), currentPage)
// 		.then(
// 			function success(obj) {
// 				showRepoList(obj);
// 				if (obj['repos'].length == 0) {
// 					message.html("No repositories is found");
// 					pagination.addClass("hidden");
// 				}
// 				else {
// 					message.html("");
// 					hideBackground();
// 					totalCountLabel.html("Total Count");
// 					totalCount.html(obj['pagesCount']);
// 				}
// 				if (currentPage <= 1) {
// 					buttonPrevious.addClass("disabled");
// 				}
// 				if (currentPage >= 2) {
// 					buttonPrevious.removeClass("disabled")
// 				}
// 				if (currentPage >= obj.pagesCount) {
// 					buttonNext.addClass("disabled");
// 				}
// 				else {
// 					buttonNext.removeClass("disabled");
// 				}
// 				inputForm.removeClass("start-input");
// 				inputForm.addClass("input");
// 				setPage(currentPage);
//
// 			},
// 			function error() {
// 				message.html("Enter correct name");
// 			}
// 		);
//}
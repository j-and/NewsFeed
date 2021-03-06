(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('fullNewsCtrl', ['newsItemsService', 'usersService', '$uibModal', '$scope', '$location', '$routeParams', function (newsItemsService, usersService, $uibModal, $scope, $location, $routeParams) {
			$scope.usersService = usersService;
			$scope.$routeParams = $routeParams;

			$scope.id = $scope.$routeParams.id.substr(1);

			$scope.newsItems = newsItemsService.getNewsItemsArray();
			$scope.newsItem = {
				author: newsItemsService.getStaticNewsItemsArray()[$scope.id].author,
				date: newsItemsService.getStaticNewsItemsArray()[$scope.id].date,
				deleted: 'false',
				id: newsItemsService.getStaticNewsItemsArray()[$scope.id].id,
				summary: newsItemsService.getStaticNewsItemsArray()[$scope.id].summary,
				tag: newsItemsService.getStaticNewsItemsArray()[$scope.id].tag,
				text: newsItemsService.getStaticNewsItemsArray()[$scope.id].text,
				title: newsItemsService.getStaticNewsItemsArray()[$scope.id].title
			};

			/**
			 * @ngdoc function
			 * @name openDeleteNewsModal
			 * @description open delete news modal
			 * @param {number} index
			 */
			$scope.openDeleteNewsModal = function (index) {
				var modalInstance = $uibModal.open({
					templateUrl: '/src/news/deleteNewsModal/deleteNewsModal.html',
					controller: 'deleteNewsModalCtrl',
					controllerAs: 'deleteNews'
				});

				modalInstance.result.then(function (param) {
					if (param) {
						$scope.newsItem.deleted = true;
						//$location.location.href = '/#!/newsfeed';
						$location.path('/#newsfeed');
					}
				});
			};

			/**
			 * @ngdoc function
			 * @name openEditNewsModal
			 * @description open edit news modal
			 * @returns {object} newsItem
			 * @returns {number} index
			 **/
			$scope.openEditNewsModal = function () {
				var id = $scope.newsItem.id;
				$scope.newsItem = {
						author: $scope.newsItems[id].author,
						date: $scope.newsItems[id].date,
						deleted: 'false',
						id: $scope.newsItems[id].id,
						summary: $scope.newsItems[id].summary,
						tag: $scope.newsItems[id].tag,
						text: $scope.newsItems[id].text,
						title: $scope.newsItems[id].title
					} || {};
				$uibModal.open({
					templateUrl: '/src/news/editNewsModal/editNewsModal.html',
					controller: 'editNewsModalCtrl',
					controllerAs: 'editNews',
					resolve: {
						newsItem: function () {
							return $scope.newsItem;
						},
						index: function () {
							return id;
						}
					}
				})
			};

			/**
			 * @ngdoc function
			 * @name $watch
			 * @description set users role if it'schanged
			 * @param {object} usersService.getRole()
			 * @param {object} function (newValue, oldValue, $scope)
			 */
			$scope.$watch('usersService.getRole()', function (newValue, oldValue, $scope) {
				if (newValue !== oldValue) {
					$scope.role = usersService.getRole();
				}
			}, true);
		}])
})();


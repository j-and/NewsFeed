(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
			//Header view depending on the alerts and role
			$scope.alerts = true;
			$scope.role = 'user';
			$scope.input = "";
			$scope.searchResults = false;

			$scope.openProfileModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/profileModal/profileModal.html',
					controller: 'profileModalCtrl',
					controllerAs: 'profile'
				});
			};
			$scope.openEditProfileModal = function () {
				$uibModal.open({
					templateUrl: '/src/header/editProfileModal/editProfileModal.html',
					controller: 'editProfileModalCtrl',
					controllerAs: 'editProfile'
				})
			};
			//Typeahead
			$scope.news = [{title: "Title1", author: "John Doe"},
				{title: "Title10", author: "John Doe"},
				{title: "Title100", author: "John Doe"},
				{title: "Title10000", author: "John Doe"},
				{title: "Title10001"}];

			var typeaheadArray = [];
			for (var i = 0; i < $scope.news.length; i++) {
				typeaheadArray.push($scope.news[i].title);
			}

			$scope.callback = function (news) {
				$scope.news = typeaheadArray;
				$scope.showSearchResults();
			};

			$scope.showSearchResults = function () {
				if ($scope.searchResults) {
					return $scope.searchResults = false;
				}
				else {
					$scope.searchResults = true
				}
			};
			
			//TO DO
			$scope.selectFilter = function () {
				alert('TODO: selected filter=');
			};

			//TO DO
			$scope.search = function () {
				alert('TODO: Search');
			};
			//TO DO
			$scope.signOut = function () {
				alert('TODO: signOut');
			};

		}])
		
		// .directive('typeahead', ['$compile', '$timeout', function ($compile, $timeout) {

			.directive('typeahead', typeahead);

			function typeahead($compile, $timeout) {
				var directive = {
					restrict: 'A',
					transclude: true,
					scope: {
						ngModel: '=',
						typeahead: '=',
						typeaheadCallback: "="
					},
					link: link
				};
				return directive;


				 function link(scope, elem, attrs) {
					 var template = '<div class="dropdown">' +
						 '<ul class="dropdown-menu typeahead" ' +
						 ' ng-hide="!ngModel.length || !filtered.length || selected">' +
						 '<li ng-repeat="item in filtered = (typeahead | filter:{title:ngModel} | limitTo:3) track by $index" ' +
						 'ng-click="click(item)" ng-class="{active:$index==active}" ' +
						 'ng-mouseenter="mouseenter($index)">' +
						 '<a>{{item.title}}</a></li>' +
						 '</ul>' +
						 '</div>';

					// elem.bind('blur', function () {
					// 	$timeout(function () {
					// 		scope.selected = true;
					// 	}, 100);
					//
					// });


					elem.bind("keydown", function ($event) {
						if ($event.keyCode == 38 && scope.active > 0) { // arrow up
							scope.active--;
							scope.$digest()
						} else if ($event.keyCode == 40 && scope.active < scope.filtered.length - 1) { // arrow down
							scope.active++;
							scope.$digest()
						} else if ($event.keyCode == 13) { // enter
							scope.$apply(function () {
								scope.click(scope.filtered[scope.active])
							})
						}
					});

					scope.click = function (item) {
						scope.ngModel = item.title;
						scope.selected = item;
						if (scope.typeaheadCallback) {
							scope.typeaheadCallback(item);
						}
						elem[0].blur()
					};

					scope.mouseenter = function ($index) {
						scope.active = $index
					};

					scope.$watch('ngModel', function (input) {
						if (scope.selected && scope.selected.title == input) {
							return
						}

						scope.active = 0;
						scope.selected = false;

						// if we have an exact match and there is only one item in the list, automatically select it
						if (input && scope.filtered.length == 1 && scope.filtered[0].title.toLowerCase() == input.toLowerCase()) {
							scope.click(scope.filtered[0])
						}
					});
					elem.after($compile(template)(scope))
			}}
			}
		// }])
)();

(function () {
	'use strict';

	angular.module('NewsFeed')
		.controller('headerCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
			//Header view depending on the alerts and role
			$scope.alerts = true;
			$scope.role = 'user';
			$scope.input = "";

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
			$scope.news = [{title: "Title1"}, {title: "Title10"}, {title: "Title100"}, {title: "Title10000"}, {title: "Title10001"}];

			$scope.callback = function (news) {
				$scope.news = news
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
		.directive('typeahead', ['$compile', '$timeout', function ($compile, $timeout) {
			return {
				restrict: 'A',
				transclude: true,
				scope: {
					ngModel: '=',
					typeahead: '=',
					typeaheadCallback: "="
				},
				link: function (scope, elem, attrs) {
					var template = '<div class="dropdown">' +
						'<ul class="dropdown-menu typeahead" ' +
						' ng-hide="!ngModel.length || !filitered.length || selected">' +
						// '<li class="form-group"><input type="checkbox"> Date</li>'+
						// '<li class="form-group"><input type="checkbox"> Theme</li>'+
						// '<li class="form-group"><input type="checkbox"> Tag</li>'+
						// 	'<li role="separator" class="divider"></li>'+
						'<li ng-repeat="item in filitered = (typeahead | filter:{title:ngModel} | limitTo:5) track by $index" ' +
						'ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ' +
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
						} else if ($event.keyCode == 40 && scope.active < scope.filitered.length - 1) { // arrow down
							scope.active++;
							scope.$digest()
						} else if ($event.keyCode == 13) { // enter
							scope.$apply(function () {
								scope.click(scope.filitered[scope.active])
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
						if (input && scope.filitered.length == 1 && scope.filitered[0].title.toLowerCase() == input.toLowerCase()) {
							scope.click(scope.filitered[0])
						}
					});

					elem.after($compile(template)(scope))
				}
			}

		}])
})();

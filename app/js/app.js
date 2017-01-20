'use strict';

// // Declare app level module which depends on views, and components

angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute',
  'ui.bootstrap',
  'ngAnimate', 'ngSanitize'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
  when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
  otherwise({redirectTo: '/drivers'});
}]);
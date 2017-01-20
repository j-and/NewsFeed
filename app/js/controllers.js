'use strict';

angular.module('F1FeederApp.controllers',  []).

/* Drivers controller */
controller('driversController', function($scope, ergastAPIservice) {

  //UI-Bootstrap
  /*$scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };*/
  
  
  $scope.nameFilter = null;
  $scope.driversList = [];
  $scope.searchFilter = function (driver) {
    var re = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
  };

  ergastAPIservice.getDrivers().success(function (response) {
    //Digging into the response to get the relevant data
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
}).

/* Driver controller */
controller('driverController', function($scope, $routeParams, ergastAPIservice) {
  $scope.id = $routeParams.id;
  $scope.races = [];
  $scope.driver = null;

  ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
    $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
  });

  ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
    $scope.races = response.MRData.RaceTable.Races;
  });
});


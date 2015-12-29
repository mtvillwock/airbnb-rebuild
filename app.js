angular.module("airbnb", [])
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.welcome = "Welcome to AirBnB";
  }])
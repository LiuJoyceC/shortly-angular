angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $window, Links) {

  $scope.link = {};

  $scope.username = $window.localStorage.getItem('username');

  $scope.addLink = function() {
    $scope.link.url = $scope.url;
    $scope.link.username = $scope.username;
    $scope.shortlyForm.$setPristine();
    $scope.url = '';
    Links.shortenLink($scope.link);

  };
});

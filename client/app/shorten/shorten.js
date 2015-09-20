angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    $scope.link.url = $scope.url;
    Links.shortenLink($scope.link);

  };
});

angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $window, Links) {

  $scope.link = {};

  $scope.addedLinks = [];

  $scope.username = $window.localStorage.getItem('username');

  $scope.adding = false;

  $scope.urlInvalid = false;

  $scope.addLink = function() {
    $scope.adding = true;
    $scope.link.url = $scope.url;
    $scope.link.username = $scope.username;
    $scope.shortlyForm.$setPristine();
    $scope.url = '';

    Links.shortenLink($scope.link)
    .then(function(data) {
      $scope.adding = false;
      if (data) {
        $scope.addedLinks.push(data);
      } else {
        $scope.urlInvalid = true;
      }
    });
  };

  $scope.truncateUrl = Links.truncateUrl;

});

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, Links, Auth) {

  $scope.data = {};

  $scope.username = $window.localStorage.getItem('username');

  $scope.getLinks = function() {
    Links.allLinks($scope.username).then(function(links) {
      $scope.data.links = links;
    });
  };

  $scope.signout = function() {
    Auth.signout();
  };

  $scope.truncateUrl = Links.truncateUrl;

  $scope.getLinks();

});
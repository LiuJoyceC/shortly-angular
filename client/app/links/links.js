angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here

  console.log('Links is ' + JSON.stringify(Links));
  $scope.data = {};

  $scope.getLinks = function() {
    Links.allLinks().then(function(links) {
      $scope.data.links = links;
    });
  }
  $scope.signout =function() {
    Auth.signout();
  }


  $scope.getLinks();
  // $scope.link = {};
});

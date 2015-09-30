
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (data) {
        $window.localStorage.setItem('username', data.username);
        $window.localStorage.setItem('com.shortly', data.token);
        $location.path('/links');
      })
      .catch(function (error) {
        $scope.signinForm.$setPristine();
        $scope.user = {};
        $scope.invalidSignin = true;
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (data) {
        $window.localStorage.setItem('username', data.username);
        $window.localStorage.setItem('com.shortly', data.token);
        $location.path('/links');
      })
      .catch(function (error) {
        $scope.signupForm.$setPristine();
        $scope.user = {};
        $scope.invalidSignup = true;
        console.error(error);
      });
  };
});

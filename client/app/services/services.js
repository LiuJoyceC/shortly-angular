angular.module('shortly.services', [])

.factory('Links', function($http) {

  var allLinks = function(username) {
    return $http({
      method: 'GET',
      url: '/api/links',
    }).then(function(response) {
      return response.data.filter(function(link) {
        return link.username === username;
      });
    });
  };

  var shortenLink = function(urltoshorten) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: urltoshorten,
    }).then(function(response) {
    });
  };

  return {
    allLinks: allLinks,
    shortenLink: shortenLink,
  };
})
.factory('Auth', function($http, $location, $window) {
  // Auth service
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user,
    })
    .then(function(resp) {
      return {username: resp.config.data.username, token: resp.data.token};
    });
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user,
    })
    .then(function(resp) {
      return {username: resp.config.data.username, token: resp.data.token};
    });
  };

  var isAuth = function() {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function() {
    $window.localStorage.removeItem('com.shortly');
    $window.localStorage.removeItem('username');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout,
  };
});

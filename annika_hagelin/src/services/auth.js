module.exports = function(app) {
  app.factory('AuthService', ['$http', '$window', function($http, $window) {
    var url = require('../../config.js').serverPath;

    var token;
    var auth = {
      createUser(user) {
        $http.post(url+'/signup', user)
          .then(res => {
            token = $window.localStorage.token = res.data.token;
          });
      }
    }
    return auth;
  }]);
}

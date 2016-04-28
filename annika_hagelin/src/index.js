'use strict';
const angular = require('angular');
require('angular-route');
const serverPath = require('../config.js').serverPath;
require('style!css!./styles/mystyle.css');

const app = angular.module('TreeApp', ['ngRoute']);

require('./services/index.js')(app);
require('./directives/index.js')(app);

  app.controller('SpeciessController', ['ResourceService', function(ResourceService) {
    this.plz = 'plz respond';

    var speciess = [];
    var vm = new ResourceService('speciess', speciess);
    vm.speciess = speciess;
    return vm;

  }])
  .controller('TreesController', ['ResourceService', function(ResourceService) {

    var trees = [];
    var vm = new ResourceService('trees', trees);
    vm.trees = trees;
    return vm;

  }])
  .controller('ResourcesController', function() {})
  .controller('UserController', ['AuthService', '$location', function(AuthService, $location) {
    var vm = this;

    vm.signUp = function(user) {
      AuthService.createUser(user);
    }

    return vm;

  }]);

  app.config(['$routeProvider', function(router) {
    router
      .when('/signup', {
        controller: 'UserController',
        controllerAs: 'userCtrl',
        templateUrl: './views/signup_in.html'
      })
      .when('/home', {
        controller: 'ResourcesController',
        controllerAs: 'resourcesCtrl',
        templateUrl: './views/resources.html'
      })
  }]);

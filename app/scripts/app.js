'use strict';

angular
  .module('uarApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/task-name', {
        templateUrl: 'views/task-name.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

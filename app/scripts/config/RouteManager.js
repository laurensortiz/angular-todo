/**
 * RouteManager
 *
 * Define the routes for the application
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var RouteManager = function ($routeProvider) {
          $routeProvider
            .when('/', {
              templateUrl: 'views/task-list.html'
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
        };

        return ['$routeProvider', RouteManager];

    });

})();

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
            .when('/tasks', {
                templateUrl: 'views/task-list.html',
                controller: 'taskCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html'
            })
            .when('/tasks/:listName', {
                templateUrl: 'views/task-name.html'
            })
            .otherwise({
              redirectTo: '/tasks'
            });
    };

    return ['$routeProvider', RouteManager];

    });

})();

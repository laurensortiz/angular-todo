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
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })
            .when('/tasks', {
                templateUrl: 'views/task-list.html',
                controller: 'tasksCtrl'
            })
            .when('/tasks/:task', {
                templateUrl: 'views/task-name.html',
                controller: 'listCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html'
            })
            .otherwise({
              redirectTo: '/tasks'
            });
    };

    return ['$routeProvider', RouteManager];

    });

})();

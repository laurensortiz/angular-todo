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
                templateUrl: 'views/lists.html',
                controller: 'listCtrl'
            })
            .when('/tasks/:task', {
                templateUrl: 'views/list-detail.html',
                controller: 'listDetailCtrl'
            })
            .otherwise({
              redirectTo: '/'
            });
    };

    return ['$routeProvider', RouteManager];

    });

})();

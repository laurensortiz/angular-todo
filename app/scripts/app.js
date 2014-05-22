/**
 * Bootstrap application
 */
(function () {
    'use strict';

    var dependencies = [
        'config/RouteManager',
        'filters/friendlyUri',
        'loginModule',
        'taskModule'
    ];

    define(dependencies, function (RouteManager, friendlyUri, loginModule, taskModule) {

        var app,
            appName = 'ToDoList';

        // DI for the app.
        app = angular.module(appName, [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            taskModule
            // , loginModule
        ]);

        // Config routes
        app.config(RouteManager);

        // Filters
        app.filter('friendlyUri', friendlyUri);

        // Bootstrap app
        angular.element(document).ready(function () {
            angular.bootstrap(document, [appName]);
        });

        return app;
    });

})();

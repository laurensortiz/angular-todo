/**
 * Bootstrap application
 */
(function () {
    'use strict';

    var dependencies = [
        'config/RouteManager',
        'filters/friendlyUri',
        'services/localstorage',
        'loginModule',
        'taskModule'
    ];

    define(dependencies, function (RouteManager, friendlyUri, localstorage, loginModule, taskModule) {

        var app,
            appName = 'ToDoList';

        // DI for the app.
        app = angular.module(appName, [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            taskModule,
            loginModule
        ]);

        // Shared localstorage service
        app.factory('localstorageService', localstorage);

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

/**
 * Bootstrap application
 */
(function () {
    'use strict';

    var dependencies = [
        'config/RouteManager',
        'filters/friendly-uri',
        'filters/pretty-name',
        'services/localstorage',
        'directives/navigation',
        'loginModule',
        'taskModule'
    ];

    define(dependencies, function (RouteManager, friendlyUri, prettyName, localstorage, navDirective, loginModule, taskModule) {

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

        // Shared directive
        app.directive('navDirective', navDirective);

        // Config routes
        app.config(RouteManager);

        // Filters
        app.filter('friendlyUri', friendlyUri);
        app.filter('prettyName', prettyName);

        // Bootstrap app
        angular.element(document).ready(function () {
            angular.bootstrap(document, [appName]);
        });

        return app;
    });

})();

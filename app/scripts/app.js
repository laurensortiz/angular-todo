(function () {
  'use strict';

  var dependencies = [
    'config/RouteManager',
    'loginModule',
    'taskModule'
  ];

  define(dependencies, function (RouteManager, loginModule, taskModule) {
    var app,
        appName = 'ToDoList';

    // DI for the app.
    app = angular.module(appName, [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute'
      // , loginModule
      // , taskModule
    ]);

    // Config routes
    app.config(RouteManager);

    // Bootstrap app
    angular.element(document).ready(function () {
      angular.bootstrap(document, [appName]);
    });

    return app;

  });


})();

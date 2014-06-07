/**
 * Login Module
 */
(function () {
    'use strict';

    var dependencies = [
        'services/login',
        'controllers/login',
        'services/auth'
    ];

    define(dependencies, function (loginService, loginCtrl, auth) {

        var moduleName = 'ToDoList.Login';

        angular.module(moduleName, [])
            .controller('loginCtrl', loginCtrl)
            .factory('loginService', loginService)
            .factory('auth', auth);

        return moduleName;

    });

})();

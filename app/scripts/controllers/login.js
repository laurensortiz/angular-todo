/**
 * Login Controller
 */
(function() {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var loginCtrl = function ($scope, $location, loginService, auth) {

            $scope.doLogin = function () {
                if ($scope.loginForm.$valid) {
                    var promise = auth.doLogin({
                            email: $scope.email,
                            password: $scope.password
                        });

                    promise.then(function () {
                        // Success - Redirect
                        $location.path('/tasks');
                    }, function (data) {
                        // Error
                        alert(data);
                    });
                }
            };

        };

        return ['$scope', '$location', 'loginService', 'auth', loginCtrl];

    });
})();

(function() {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var loginCtrl = function ($scope, $location, loginService, auth) {

            $scope.$on('$routeChangeSuccess', function () {
                $scope.isLoggedIn = loginService.isLoggedIn();
            console.log($scope.isLoggedIn);
            });



            $scope.doLogin = function () {
                if ($scope.loginForm.$valid) {
                    var promise = auth.doLogin({
                            email: $scope.email,
                            password: $scope.password
                        });

                    promise.then(function () {
                        // Success - Redirect
                        $location.path('/');
                    }, function (data) {
                        // Error
                        alert(data);
                    });
                }
            };

            $scope.doLogout = function () {
                if (loginService.logout() ) {
                    $location.path('/');
                }
            };

        };

        return ['$scope', '$location', 'loginService', 'auth', loginCtrl];

    });

})();

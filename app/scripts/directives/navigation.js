/**
 * Navigation bar directive
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var navDirective = function ($rootScope, $location, $routeParams, loginService) {

            return {
                restrict: 'E',
                templateUrl: 'views/navDirective.html',
                controller: function ($scope, $element, $location) {

                    /**
                     * Check for all route changes.
                     * When the route change and the user is not logged in
                     * the user should be redirected to the /
                     *
                     * If the user is logged in he can go anywhere but /
                     *
                     * @method
                     */
                    $scope.$on('$routeChangeSuccess', function (e, current, pre) {

                        if (!loginService.isLoggedIn()) {
                            $location.path('/');
                            return;
                        }

                        if (loginService.isLoggedIn && $location.path() === '/') {
                            // Logged in - Can't see login
                            $location.path('/tasks');
                        } else if (!loginService.isLoggedIn && $location.path() !== '/') {
                            // Not Logged in - Only see /
                            $location.path('/');
                        }
                    });

                    $scope.doLogout = function () {
                        loginService.logout();
                        $location.path('/');
                    };

                    $scope.isLoggedIn = loginService.isLoggedIn();
                    $scope.$on('user.isLoggedIn', function (event, data) {
                        $scope.isLoggedIn = data.isLoggedIn;
                    });
                },
                link: function ($scope, element) {
                    // $scope.isLoggedIn = loginService.isLoggedIn();
                    // $scope.$on('user.isLoggedIn', function (event, data) {
                    //     $scope.isLoggedIn = data.isLoggedIn;
                    // });
                }
            };

        };

        return ['$rootScope', '$location', '$routeParams', 'loginService', navDirective];

    });

})();

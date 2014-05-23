/**
 * Get specific task
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var listCtrl = function ($scope, $routeParams, $location, taskFactory) {
            // Get specific task
            var task = taskFactory.get({ task: $routeParams.task });
            $scope.task = task.$promise
                .then(function (data) {
                    $scope.list = data;
                })
                // Redirect on error
                .catch(function (data) {
                    $location.path("/");
                });

        };

        return ['$scope', '$routeParams', '$location', 'taskFactory', listCtrl];

    });

})();

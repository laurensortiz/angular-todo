/**
 * Get specific task
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var listCtrl = function ($scope, $routeParams, $location, taskFactory) {

            // List information
            $scope.list = {};

            // Get specific task
            taskFactory.get({ task: $routeParams.task }).$promise
                .then(function (data)  { $scope.list = data; })
                .catch(function (data) { $location.path("/"); });

            // Register new task
            $scope.create = function () {
                if ($scope.newTask) {
                    $scope.list.tasks.push({name: $scope.newTask, completed: false});
                    $scope.newTask = '';
                }
            };

        };

        return ['$scope', '$routeParams', '$location', 'taskFactory', listCtrl];

    });

})();

/**
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var tasksCtrl = function ($scope, taskFactory) {
            $scope.tasks = taskFactory.query();
        };

        return ['$scope', 'taskFactory', tasksCtrl];

    });

})();

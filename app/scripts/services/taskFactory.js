/**
 * taskFactory
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var taskFactory = function ($resource) {
            return $resource('/fake-data/tasks.json');
        };

        return ['$resource', taskFactory];
    });

})();

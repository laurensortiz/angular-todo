/**
 * taskFactory
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var taskFactory = function ($resource) {
            return $resource('/fake-data/:task.json', {}, {
                query: {method: 'GET', params: {task: 'tasks'}, isArray: true}
            });
        };

        return ['$resource', taskFactory];
    });

})();

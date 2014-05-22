(function () {
    'use strict';

    var dependencies = [
        'services/taskFactory',
        'controllers/taskCtrl'
    ];

    define(dependencies, function (taskFactory, taskCtrl) {

        var moduleName = 'ToDoList.Tasks';

        angular.module(moduleName, [])
            .controller('taskCtrl', taskCtrl)
            .factory('taskFactory', taskFactory);

        return moduleName;

    });

})();

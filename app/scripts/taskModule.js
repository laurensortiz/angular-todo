(function () {
    'use strict';

    var dependencies = [
        'services/taskFactory',
        'controllers/tasksCtrl',
        'controllers/listCtrl'
    ];

    define(dependencies, function (taskFactory, tasksCtrl, listCtrl) {

        var moduleName = 'ToDoList.Tasks';

        angular.module(moduleName, [])
            .controller('tasksCtrl', tasksCtrl)
            .controller('listCtrl', listCtrl)
            .factory('taskFactory', taskFactory);

        return moduleName;

    });

})();

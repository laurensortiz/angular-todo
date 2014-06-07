(function () {
    'use strict';

    var dependencies = [
        'services/task',
        'controllers/list-detail',
        'controllers/list'
    ];

    define(dependencies, function (taskFactory, listDetailCtrl, listCtrl) {

        var moduleName = 'ToDoList.Tasks';

        angular.module(moduleName, [
                'ui.bootstrap',
                'ui.sortable'
            ])
            .controller('listCtrl', listCtrl)
            .controller('listDetailCtrl', listDetailCtrl)
            .factory('taskFactory', taskFactory)
            .constant('TODO_LISTS', 'todo-lists');

        return moduleName;

    });

})();

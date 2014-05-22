(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var taskCtrl = function ($scope, taskFactory) {
            var tasks = taskFactory.query();
            tasks.$promise
                    .then(function (data) {
                        $scope.tasks = data;
                    });
        };

        return ['$scope', 'taskFactory', taskCtrl];

    });

})();

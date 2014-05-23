/**
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var tasksCtrl = function ($scope, taskFactory) {
            $scope.lists = [];

            $scope.newList = function () {
                if ($scope.list) {
                    var id = $scope['list'].replace(/\s+/g, '-').toLowerCase(),
                        listName = $scope.list;

                    $scope.lists.push({
                        'id': id,
                        'listName': listName
                    });

                    $scope.list = '';

                    // @TODO Close modal
                    // @TODO Broadcast event
                    // @TODO Move logic to Service
                }
            };


        };

        return ['$scope', 'taskFactory', tasksCtrl];

    });

})();

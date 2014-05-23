/**
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var tasksCtrl = function ($scope, taskFactory, localstorageService) {
            $scope.lists = [];

            $scope.init = function () {
                localstorageService.checkSupport();
            };

            $scope.$on('localstorage-unavailable', function (event) {
                // @TODO trigger modal telling that localstorage is not available
                // and the
            });

            /**
             * Create a new todo list item
             * @method newList
             */
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

            $scope.init();
        };

        return ['$scope', 'taskFactory', 'localstorageService', tasksCtrl];

    });

})();

/**
 * Get specific task
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var listCtrl = function ($scope, $routeParams, localstorageService, taskFactory) {

            var routeName = $routeParams.task,
                data,
                tasks;

            $scope.title = routeName;

            $scope.tasks = tasks = localstorageService.getItems(routeName);

            // Register new task
            $scope.create = function () {
                if ($scope.myForm.$valid) {
                    // Create object to store
                    data = {
                            name: $scope.newTask,
                            completed: false
                        };

                    localstorageService.storeItem(routeName, data);

                    // Broadcast event if needed
                    // $rootScope.$broadcast('task.created');
                    $scope.tasks.push(data);

                    // Clear input
                    $scope.newTask = '';
                }
            };

            /**
             * Mark an item as completed
             * @param  {Object} element Element marked as completed
             */
            $scope.complete = function (element) {
                // Store partial state on LS
                localstorageService.updateItem(routeName, $scope.tasks);
            };

            /**
             * Clear completed tasks from the list
             */
            $scope.clearCompleted = function () {
                $scope.tasks = tasks.filter(function (task) {
                    return !task.completed;
                });
                localstorageService.updateItem(routeName, $scope.tasks);
            };

        };

        return ['$scope', '$routeParams', 'localstorageService', 'taskFactory', listCtrl];

    });

})();

/**
 * Get specific task
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var listCtrl = function ($scope, $timeout, $routeParams, localstorageService, taskFactory) {

            var routeName = $routeParams.task,
                data,
                deletedTasks = [],
                tasks;

            /**
             * Populate the array of deleted tasks
             * in order to show the according alerts
             * @method getDeleted
             * @param  {Array}   tasks Tasks to be deleted
             */
            var getDeleted = function (tasks) {
                for (var task in tasks) {
                    $scope.alerts.push({
                        message: 'Task "' + tasks[task].name + '" successfully deleted!'
                    });
                }
            };

            $scope.alerts = [];

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

                    // Create alerts
                    $scope.alerts.push({
                        message: 'Task "' + data.name + '" added to your list'
                    });

                    // Close alerts after 3500 ms
                    $timeout(function () {
                        $scope.closeAlert( $scope.alerts[$scope.alerts.length - 1] );
                    }, 3500);

                    // Clear input
                    $scope.newTask = '';
                }
            };

            /**
             * Close alerts
             */
            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
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
                // Store deleted tasks
                var deletedTasks = tasks.filter(function (task) {
                    return task.completed
                });

                // Add deleted tasks to the alerts array
                getDeleted(deletedTasks);

                $scope.tasks = tasks.filter(function (task) {
                    return !task.completed;
                });

                localstorageService.updateItem(routeName, $scope.tasks);
            };

        };

        return ['$scope', '$timeout', '$routeParams', 'localstorageService', 'taskFactory', listCtrl];

    });

})();

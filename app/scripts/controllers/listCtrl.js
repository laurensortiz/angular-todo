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
                tasks = $scope.tasks = localstorageService.getItems(routeName);

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

        };

        return ['$scope', '$routeParams', 'localstorageService', 'taskFactory', listCtrl];

    });

})();

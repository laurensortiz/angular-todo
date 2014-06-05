/**
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [
        'controllers/modalCtrl'
    ];

    define(dependencies, function (modalCtrl) {

        var tasksCtrl = function ($scope, $timeout, $modal, $rootScope, TODO_LISTS, taskFactory, localstorageService) {
            // Tasks lists
            var lists = $scope.lists = localstorageService.getItems(TODO_LISTS);

            $scope.alerts = [];

            /**
             * Create LIST form submitted
             * subscribed to 'list.form.submitted' pub. event
             * @public
             */
            $scope.$on('list.form.submitted', function (event, data) {
                localstorageService.storeItem(TODO_LISTS, data);
                // Broadcast event if needed
                // $scope.$broadcast('list.updated', item);
                $scope.lists.push(data);

                // Create alerts
                $scope.alerts.push({
                    message: 'List "' + data.name + '" added to your list'
                });

                // Close alerts after 3500 ms
                $timeout(function () {
                    $scope.closeAlert( $scope.alerts[$scope.alerts.length - 1] );
                }, 3500);
            });

            /**
             * Open modal
             * @public
             */
            $scope.openModal = function () {
                var config = {
                        templateUrl: 'views/create-task-modal.html',
                        controller: modalCtrl
                    },
                    modalInstance = $modal.open(config);
            };

            /**
             * Close alerts
             */
            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };

        };

        return ['$scope', '$timeout',  '$modal', '$rootScope', 'TODO_LISTS','taskFactory', 'localstorageService', tasksCtrl];
    });

})();

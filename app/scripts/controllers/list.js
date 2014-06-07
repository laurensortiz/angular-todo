/**
 * Get all lists stored in Local Storage
 */
(function () {
    'use strict';

    var dependencies = [
        'controllers/modal'
    ];

    define(dependencies, function (modalCtrl) {

        var listCtrl = function ($scope, $timeout, $modal, $rootScope, TODO_LISTS, taskFactory, localstorageService) {

            // Tasks lists
            $scope.lists = localstorageService.getItems(TODO_LISTS);

            // Alerts array
            $scope.alerts = [];

            /**
             * Create LIST form submitted
             * subscribed to 'list.form.submitted' pub. event
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
             */
            $scope.openModal = function () {
                var config = {
                        templateUrl: 'views/create-task-modal.html',
                        controller: modalCtrl
                    };
                    $modal.open(config);
            };

            /**
             * Close alerts
             */
            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };

        };

        return ['$scope', '$timeout',  '$modal', '$rootScope', 'TODO_LISTS','taskFactory', 'localstorageService', listCtrl];
    });

})();

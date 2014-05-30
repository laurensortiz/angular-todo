/**
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [
        'controllers/modalCtrl'
    ];

    define(dependencies, function (modalCtrl) {

        var tasksCtrl = function ($scope, $modal, $rootScope, TODO_LISTS, taskFactory, localstorageService) {
            // Tasks lists
            var lists = $scope.lists = localstorageService.getItems(TODO_LISTS);

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

        };

        return ['$scope', '$modal', '$rootScope', 'TODO_LISTS','taskFactory', 'localstorageService', tasksCtrl];
    });

})();

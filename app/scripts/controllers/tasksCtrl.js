/**
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [
        'controllers/modalCtrl'
    ];

    define(dependencies, function (modalCtrl) {

        var tasksCtrl = function ($scope, $modal, $filter, taskFactory, localstorageService) {
            // Tasks lists
            $scope.lists = [];

            /**
             * Create a new todo list item
             * subscribed to 'listCreated' pub. event
             * @method newList
             * @TODO Move logic to LocalStorage Service
             */
            $scope.$on('listCreated', function (event, data) {

                var id = $filter('friendlyUri')(data.listName),
                    listName = data.listName;

                $scope.lists.push({
                    'id': id,
                    'listName': listName
                });
            });

            /**
             * Open modal
             */
            $scope.openModal = function () {
                var modalInstance = $modal.open({
                        templateUrl: 'views/create-task-modal.html',
                        controller: modalCtrl
                    });
            };
        };

        return ['$scope', '$modal', '$filter', 'taskFactory', 'localstorageService', tasksCtrl];
    });

})();

/**
 * Modal Ctrl
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var modalCtrl = function ($scope, $filter, $modalInstance, $rootScope) {
            // Use an object. So angular will look on the prototype chain.
            $scope.data = {
                name: '',
                myForm: ''
            };

            /**
             * Watch when data.name changes for updating the $scope.id property
             * @return {[type]} [description]
             */
            $scope.$watch('data.name', function () {
                $scope.id = $filter('friendlyUri')($scope.data.name);
            });

            $scope.newList = function () {
                if ($scope.data.myForm.$valid) {
                    $rootScope.$broadcast('list.form.submitted', {
                        name: $scope.data.name,
                        id: $scope.id
                    });
                    $modalInstance.close($scope.data.name);
                }
            };

            $scope.cancel = function () {
                // Optional broadcasting
                // $rootScope.$broadcast('modalDismissed');
                $modalInstance.dismiss();
            };

        };

        return ['$scope', '$filter', '$modalInstance', '$rootScope', modalCtrl];

    });

})();

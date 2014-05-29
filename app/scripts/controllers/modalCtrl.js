/**
 * Modal Ctrl
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var modalCtrl = function ($scope, $modalInstance, $rootScope) {
            // Use an object. So angular will look on the prototype chain.
            $scope.data = {
                listName: '',
                myForm: ''
            };

            $scope.newList = function () {
                if ($scope.data.myForm.$valid) {
                    $rootScope.$broadcast('list.form.submitted', { listName: $scope.data.listName});
                    $modalInstance.close($scope.data.listName);
                }
            };

            $scope.cancel = function () {
                // Optional broadcasting
                // $rootScope.$broadcast('modalDismissed');
                $modalInstance.dismiss();
            };

        };

        return ['$scope', '$modalInstance', '$rootScope', modalCtrl];

    });

})();

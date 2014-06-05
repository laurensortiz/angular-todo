(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var loginHide = function ($rootScope, loginService) {

            return {
                restrict: 'A',
                link: function (scope, element) {
                    if (!loginService.isLoggedIn()) {
                        element.hide();
                    }
                }
            };

        };

        return ['$rootScope', 'loginService', loginHide];

    });

})();

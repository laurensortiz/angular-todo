/**
 * taskFactory
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var localStorageService = function ($rootScope) {

                /**
                 * Check support for localstorage
                 * @return Broadcast 'localstorage-available' message
                 */
            var checkSupport = function () {
                    if (Modernizr.localstorage) {
                        $rootScope.$broadcast('localstorage-unavailable');
                    }
                },
                /**
                 * Get localstorage items
                 * @return {Array} Items
                 */
                getItems = function (key) {
                    console.log('Get items...');
                },
                /**
                 * Set localstorage item
                 */
                setItems = function (item) {
                    console.log('Set Items...');
                },
                /**
                 * Clear localstorage
                 */
                clearStorage = function () {
                    console.log('Clear storage...');
                };

            return {
                checkSupport: checkSupport,
                getItems: getItems,
                setItems: setItems,
                clearStorage: clearStorage
            };
        };

        return ['$rootScope', localStorageService];
    });

})();

/**
 * localStorage service
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var localStorageService = function ($rootScope, $filter) {

            var resultItems = [];
                /**
                 * Get localstorage items
                 * @public
                 * @return {Array} Items
                 */
            var getItems = function (key) {
                    var items = JSON.parse( localStorage.getItem(key));

                    if (items) {
                        resultItems.push(items);
                    }

                    return resultItems;
                },
                /**
                 * Set localstorage item
                 * @public
                 * @param {Object} data Data to store on localStorage
                 */
                storeItem = function (key, data) {

                    var item = transformData(data);

                    resultItems.push(item);
                    // Store the data using html5 localStorage
                    localStorage.setItem(key, resultItems);

                    // Broadcast event
                    $rootScope.$broadcast('list.updated', resultItems);
                },
                /**
                 * Clear localstorage
                 * @public
                 */
                clearStorage = function () {
                    console.log('Clear storage...');
                },
                /**
                 * Transform data it is easy to store using html5 localStorage
                 * @method transformData
                 * @private
                 * @return {Object} Transformed data
                 */
                transformData = function (data) {
                    // Create the object to store
                    var item = {
                        'id': $filter('friendlyUri')(data.listName),
                        'listName': data.listName
                    };

                    return JSON.stringify(item);
                };

            return {
                getItems: getItems,
                storeItem: storeItem,
                clearStorage: clearStorage
            };
        };

        return ['$rootScope', '$filter', localStorageService];
    });

})();

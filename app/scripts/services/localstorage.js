/**
 * localStorage service
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var localStorageService = function ($rootScope) {

            var resultItems = [];
                /**
                 * Get localstorage items
                 * @public
                 * @return {Array} Items
                 */
            var getItems = function (key) {
                    var items = JSON.parse(localStorage.getItem(key) || '[]');

                    return items;
                },
                /**
                 * Store localstorage item
                 * @public
                 * @param {Object} data Data to store on localStorage
                 */
                storeItem = function (key, data) {

                    // Create an object using the data from the FORM
                    var item = transformData(data);

                    // Get previous items for the key
                    resultItems = getItems(key);

                    // Create an array for store all JSON objects
                    resultItems.push(item);

                    // Store the data using html5 localStorage
                    localStorage.setItem(key, JSON.stringify(resultItems));
                },
                /**
                 * Clear localstorage
                 * @public
                 */
                clearStorage = function () {
                    console.log('Clear storage...');
                },
                /**
                 * Transform data so it will be easy to store using html5 localStorage
                 * @method transformData
                 * @private
                 * @return {Object} Transformed data
                 */
                transformData = function (data) {
                    // Create the object to store
                    var item = {},
                        element;

                    for (element in data) {
                        item[element] = data[element];
                    }

                    return item;
                };

            return {
                getItems: getItems,
                storeItem: storeItem,
                clearStorage: clearStorage
            };
        };

        return ['$rootScope', localStorageService];
    });

})();

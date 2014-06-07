/**
 * localStorage service
 * Get all tasks
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var localStorageService = function () {

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
                 * Store new localstorage item
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
                 * Update existing items on LS
                 * @param  {String} key  Where to store the data
                 * @param  {Array} data Data to be updated
                 */
                updateItem = function (key, data) {
                    if (!data instanceof Array) {
                        return;
                    }
                    data = cleanUpData(data);
                    localStorage.setItem(key, JSON.stringify(data));
                },
                /**
                 * Clear localstorage
                 * @public
                 */
                clearStorage = function () {
                    console.log('Clear storage...');
                },
                /**
                 * Remove any prefixed property from the object with '$'
                 * @param {Array} data Original data
                 * @return {Array} Clean array/Object with no '$' prefixed props
                 */
                cleanUpData = function (data) {
                    if (data instanceof Array) {
                        for (var i = 0; i < data.length; i++) {
                            cleanUpData(data[i]);
                        }
                    }
                    else if (data instanceof Object) {
                        for (var property in data) {
                            if (/^\$+/.test(property)) {
                                delete data[property];
                            }
                            else {
                                cleanUpData(data[property]);
                            }
                        }
                    }

                    return data;
                },
                /**
                 * Transform data so it will be easy to store using html5 localStorage
                 * @method transformData
                 * @param {Object} data Data to be transformed in order to save it on LS
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
                updateItem: updateItem,
                clearStorage: clearStorage
            };
        };

        return [localStorageService];
    });

})();

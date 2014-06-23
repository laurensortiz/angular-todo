/**
 * localStorage service
 * Used for interact with the LS HTML5 API
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var localStorageService = function () {
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
                 * @param {String} key Localstorage key
                 */
                storeItem = function (key, data) {
                    var item = {},
                        resultItems = [],
                        element;

                    // Create an object using the data from the FORM
                    for (element in data) {
                        item[element] = data[element];
                    }

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
                };

            return {
                getItems: getItems,
                storeItem: storeItem,
                updateItem: updateItem
            };
        };

        return [localStorageService];
    });

})();

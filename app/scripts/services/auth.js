/**
 * Authentication methods
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var Auth = function ($resource, $q, loginService) {

                /**
                 * Get user data from the server
                 * to compare with the FORM data
                 * @return {Object} JSON from the server
                 */
            var getUserData = function () {
                    return $resource('fake-user/user.json');
                },
                /**
                 * Compare values from the user and the server's
                 * @param  {Object} serverData Data from the server
                 * @param  {Object} userData   Data from the FORM
                 * @return {Object}            Promise object
                 */
                compareValues = function (serverData, userData) {
                    var deferred = $q.defer();

                    // Easy and quick comparisson. Just for the demo
                    if (JSON.stringify(serverData[0]) == JSON.stringify(userData)) {
                        deferred.resolve(userData);
                    } else {
                        deferred.reject('Wrong credentials');
                    }

                    return deferred.promise;

                },
                /**
                 * Check if the user/pwd matches the one on the server
                 * @param  {Object} data User data from the login FORM
                 */
                doLogin = function (userData) {
                    // Get the fake user data and compare
                    var User = getUserData(),
                        deferred = $q.defer();

                    User.query().$promise
                        .then(function (data) {
                            return compareValues(data, userData);
                        }, function (data) {
                            deferred.reject(data.data);
                        })
                        .then(function (data) {
                            deferred.resolve(loginService.login(data));
                        }, function (data) {
                            deferred.reject(data)
                        });

                    return deferred.promise;
                };

            return {
                doLogin: doLogin
            };

        };

        return ['$resource', '$q', 'loginService', Auth];
    });

})();

/**
 * Login Service
 * It uses "user" cookie for storing data about the registered user
 */
(function () {
    'use strict';

    var dependencies = [];

    define(dependencies, function () {

        var loginService = function ($cookieStore, $q) {

                /**
                 * Get logged user data
                 * @param {String} data User to retrieve
                 * @public
                 * @return {Object} The logged user
                 */
            var getUserData = function (data) {
                    // Because this is an example, it will always get
                    // information from user. Later, we can replace the hardcoded
                    // value for that cookie to something else.
                    var key = data || 'user';

                    if (isLoggedIn) {
                        return $cookieStore.get(key);
                    }
                },
                /**
                 * Check if the user is logged in
                 * @public
                 * @return {Boolean}
                 */
                isLoggedIn = function () {
                    if ($cookieStore.get('user')) {
                        return true;
                    } else {
                        return false;
                    }
                },
                /**
                 * Log the user out
                 * @public
                 */
                doLogout = function () {
                    if (isLoggedIn()) {
                        $cookieStore.remove('user');
                        return true;
                    } else {
                        return false;
                    }
                },
                /**
                 * Log the user in
                 * @public
                 */
                doLogin = function (data) {
                    if (!isLoggedIn()) {
                        $cookieStore.put('user', data);
                        return true;
                    }
                };

            return {
                getUser: getUserData,
                isLoggedIn: isLoggedIn,
                logout: doLogout,
                login: doLogin
            };
        };

        return ['$cookieStore', '$q', loginService];

    });

})();

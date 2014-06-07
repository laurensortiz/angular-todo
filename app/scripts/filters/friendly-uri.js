(function (){
    'use strict';
    var dependencies = [];

    define(dependencies, function () {

        var friendlyUri = function () {
            return function (input) {
                return input.replace(/\s+/g, '-').toLowerCase();
            };
        };

        return [friendlyUri];
    });

})();

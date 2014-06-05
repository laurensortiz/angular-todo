(function (){
    'use strict';
    var dependencies = [];

    define(dependencies, function () {

        var prettyName = function () {
            return function (input) {
                var result = input.replace(/\-+/g, ' ');
                return result[0].toUpperCase() + result.slice(1);
            };
        }

        return [prettyName];
    });

})();

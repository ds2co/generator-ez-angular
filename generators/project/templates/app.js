(function (angular) {
    'use strict';

    angular
        .module('<%= module %>', [
            'ngRoute'
        ])
        .config(config);

    config.$inject = ['$routeProvider', '$compileProvider'];

    function config($routeProvider, $compileProvider) {
        // Routing
        $routeProvider
            .when('/',{
                template: '<home></home>'
            });

        // to improve performance. (this removes the jquery .data() binding
        //      of angular data)
        $compileProvider.debugInfoEnabled(false);
    }
})(window.angular);
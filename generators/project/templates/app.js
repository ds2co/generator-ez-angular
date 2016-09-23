(function (angular) {
    'use strict';

    angular
        .module('<%= module %>', [])
        .config(config);

    config.$inject = ['$compileProvider'];

    function config($compileProvider) {
        // to improve performance. (this removes the jquery .data() binding
        //      of angular data
        $compileProvider.debugInfoEnabled(false);
    }
})(window.angular);
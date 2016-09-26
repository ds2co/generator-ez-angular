(function () {
    'use strict';

    angular
        .module('<%= module %>')
        .directive('home', home);

    home.$inject = [];

    function home() {
        // Usage:
        //      <home></home>
        // Creates:
        //
        var directive = {
            controller: Controller,
            controllerAs: 'home',
            bindToController: {},
            scope: true,
            templateUrl: 'app/scripts/components/home/home.html',
            restrict: 'E'
        };

        return directive;
    }

    Controller.$inject = [];

    function Controller() {
        var vm = this;

        this.text = 'Hello World!';
    }
})();
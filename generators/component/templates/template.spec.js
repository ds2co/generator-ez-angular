(function () {
    'use strict';

    describe('Component: <%= camelName %>', function () {
        var component = '<<%= kebabName %>></<%= kebabName %>>';

        beforeEach(module('RegisterSite'));

        var element,
            scope;

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            element = $compile(component)(scope);
        }));

        it('example test', function (done) {
            done();
        });
    });
})();

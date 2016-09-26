(function () {
    'use strict';

    describe('Component: home', function () {
        var component = '<home></home>';

        beforeEach(module('<%= module %>'));

        var element,
            scope;

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            element = $compile(component)(scope);
        }));

        it('home.text should equal "Hello World!"', function (done) {
            var controllerScope = scope.home;

            scope.$digest();

            expect(controllerScope.text).to.be('Hello World!');

            done();
        });
    });
})();

'use strict';

var context;

module.exports = {
    installDependencies: installDependencies,
    installKarma: installKarma
};

function installKarma(c) {
    c.composeWith('karma:app', {
        options: {
            frameworks: ['mocha', 'chai'],
            browsers: ['Chrome'],
            'app-files': ['./app/scripts/app.js', './app/scripts/**/**/*.js'],
            'bower-components-path': './app/lib',
            'test-files': ['./test/spec/**/**/*.js']
        }
    });
}

function installDependencies(c) {
    context = c;
    installFrontEndDeps();
}

function installFrontEndDeps() {
    var plugins = [
        'angular',
        'angular-mocks',
        'angular-route',
        'lodash'
    ];

    context.bowerInstall(plugins);
}
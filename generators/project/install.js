'use strict';

var context;

module.exports = {
    installDependencies: installDependencies,
    installKarma: installKarma
};

function installKarma(c) {
    c.composeWith('karma:app', {
        options: {
            'base-path': '../',
            frameworks: ['mocha', 'chai'],
            browsers: ['Chrome'],
            'app-files': [
                './app/lib/angular/angular.js',
                './app/lib/angular-mocks/angular-mocks.js',
                './app/lib/angular-route/angular-route.js',
                './app/scripts/app.js',
                './app/scripts/**/*.js',
                '**/*.html'
            ],
            'test-files': ['./test/spec/**/*.js']
        }
    });
}

function installDependencies(c, done) {
    context = c;
    installNpmDeps();
    installFrontEndDeps();
    done();
}

function installNpmDeps() {
    context.npmInstall(['mocha', 'chai', 'karma'], { 'saveDev': true });
    context.npmInstall(['karma-mocha', 'karma-chai', 'generator-ez-angular'], { 'saveDev': true });
    context.npmInstall(['express', 'path'], { 'save': true });
}

function installFrontEndDeps() {
    var bower_plugins = [
        'angular',
        'angular-mocks',
        'angular-route',
        'lodash',
        'jquery',
        context.config.get('css')
    ];

    context.bowerInstall(bower_plugins);
}
'use strict';

var _ = require('lodash'),
    context;

module.exports = {
    configure: configure
};

function configure(c) {
    context = c;
    setBasePath();
    setConfigVariables();
    configureCss();
}

function setBasePath() {
    if(context.answers.destination !== context.destinationPath) {
        context.destinationRoot(context.answers.destination);
    }
}

function setConfigVariables() {
    context.config.set({
        module: context.answers.moduleName,
        css: context.answers.cssFramework,
        cssFrameworkIncludeJS: '',
        cssFrameworkIncludeCSS: ''
    });
}

function configureCss(){
    switch(context.config.get('css')) {
        case 'bootstrap':
            context.config.set('cssFrameworkIncludeCSS', 'lib/bootstrap/dist/css/bootstrap.min.css');
            context.config.set('cssFrameworkIncludeJS', 'lib/bootstrap/dist/js/bootstrap.min.js');
            break;
        case 'semantic':
            context.config.set('cssFrameworkIncludeCSS', 'lib/semantic/dist/semantic.min.css');
            context.config.set('cssFrameworkIncludeJS', 'lib/semantic/dist/semantic.min.js');
            break;
        default:
            break;
    }
}
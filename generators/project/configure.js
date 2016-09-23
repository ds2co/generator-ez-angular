'use strict';

var _ = require('lodash');

module.exports = {
    configure: configure
};

function configure(c) {
    setBasePath(c);
    setConfigVariables(c);
}

function setBasePath(context) {
    if(context.answers.destination !== context.destinationPath) {
        context.destinationRoot(context.answers.destination);
    }
}

function setConfigVariables(context) {
    context.config.set({
        module: context.answers.moduleName,
        css: context.answers.cssFramework
    });
}
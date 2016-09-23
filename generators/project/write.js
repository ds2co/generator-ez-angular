'use strict';

var mkdirp = require('mkdirp'),
    paths = require('./paths'),
    context;

module.exports = {
    setup: setup
};

function setup(c) {
    context = c;
    setupDirectoryStructure();
    createDefaultFiles();
}

function setupDirectoryStructure() {
    paths.app.forEach(function(value){
        mkdirp.sync(context.destinationPath(value));
    });

    paths.test.forEach(function(value){
        mkdirp.sync(context.destinationPath(value));
    });
}

function createDefaultFiles() {
    createHTMLfromTemplate();
}

function createHTMLfromTemplate() {
    context.fs.copyTpl(
        context.templatePath('index.html'),
        context.destinationPath(paths.indexFile),
        {}
    );
}
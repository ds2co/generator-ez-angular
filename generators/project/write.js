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
    createHtmlFromTemplate();
    createJsFromTemplate();
    createOtherFromTemplate();
    setupInitialComponent();
    copyServerFile();
}

function createHtmlFromTemplate() {
    context.fs.copyTpl(
        context.templatePath('index.html'),
        context.destinationPath(paths.indexFile),
        context.config.getAll()
    );
}

function createJsFromTemplate() {
    context.fs.copyTpl(
        context.templatePath('app.js'),
        context.destinationPath(paths.appJsFile),
        {
            module: context.config.get('module')
        }
    );
}

function createOtherFromTemplate() {
    // css
    context.fs.copyTpl(
        context.templatePath('main.css'),
        context.destinationPath(paths.mainCssFile),
        {}
    );
    //.bowerrc
    context.fs.copyTpl(
        context.templatePath('.bowerrc'),
        context.destinationPath(paths.bowerRcFile),
        {}
    );
}

function setupInitialComponent(){
    mkdirp.sync(context.destinationPath(paths.initialComponentFolder));

    context.fs.copyTpl(
        context.templatePath('home.js'),
        context.destinationPath(paths.initialComponentFolder.concat('/home.js')),
        {
            module: context.config.get('module')
        }
    );

    context.fs.copyTpl(
        context.templatePath('home.html'),
        context.destinationPath(paths.initialComponentFolder.concat('/home.html')),
        { }
    );

    context.fs.copyTpl(
        context.templatePath('home.spec.js'),
        context.destinationPath(paths.test_spec_folder.concat('/components/home.spec.js')),
        {
            module: context.config.get('module')
        }
    );
}

function copyServerFile() {
    context.fs.copyTpl(
        context.templatePath('server.js'),
        context.destinationPath('server.js'),
        { }
    );
}
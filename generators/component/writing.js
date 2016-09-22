'use strict';

var mkdirp = require('mkdirp'),
    editor = require('html-wiring'),
    paths = require('./paths.js');

function createNewComponent(context) {
    var path = paths.path_to_components.concat('/', context.componentName),
        testDirectory = paths.path_to_test_directory;

    createNewDirectory(path);
    copyTemplateFiles(context, path);
    createTestFile(context, testDirectory);
    updateExistingFiles(context);
}

/*
    Create the new components base directory.
*/
function createNewDirectory(path) {
    mkdirp.sync(path);
}

/*
    Copies the template files to the new base directory.
    Replaces the placeholders in the template files with the
    data saved from configuring.
*/
function copyTemplateFiles(context, path) {
    // JS File
    context.fs.copyTpl(
        context.templatePath('template.js.tmp'),
        path.concat('/', context.config.get('camelName'), '.js'),
        context.config.getAll()
    );

    // HTML Files
    context.fs.copyTpl(
        context.templatePath('template.html'),
        path.concat('/', context.config.get('kebabName'), '.html'),
        {}
    );
    context.fs.copyTpl(
        context.templatePath('template.example.html'),
        path.concat('/', context.config.get('kebabName'), '.example.html'),
        context.config.getAll()
    );
}

/*
    Copies the test file and replaces the placeholders.
*/
function createTestFile(context, path) {
    // Test
    context.fs.copyTpl(
        context.templatePath('template.spec.js'),
        path.concat('/', context.config.get('camelName'), '.spec.js'),
        context.config.getAll()
    );
}

/*
    Updates the existing files with the new component.
*/
function updateExistingFiles(context) {
    updateHTMLFile(context, paths.index_path);
    updateHTMLFile(context, paths.examples_path);
}

/*
    Reusable function to update the HTML files.
    1. Gets the file as string.
    2. Splits the string.
    3. Adds the new components tags in the place where the string was split
        and concatenates the file.
    4. Saves the updated file.
*/
function updateHTMLFile(context, path) {
    var file = editor.readFileAsString(path);

    if(file.indexOf(context.config.get('camelName').concat(',js')) <= 0) {
        var tmp = file.split('<script src="scripts/app.js"></script>');

        file = tmp[0].concat(
            '<script src="scripts/app.js"></script>',
            '\n\t',
            '<script src="scripts/components/',
            context.config.get('kebabName'),
            '/',
            context.config.get('camelName'),
            '.js"></script>',
            tmp[1]
        );
        editor.writeFileFromString(file, path);
    }
}

module.exports = {
    createNewComponent: createNewComponent
};

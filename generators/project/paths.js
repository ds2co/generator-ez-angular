'use strict';

var app_folder = './app',
    scripts_folder = app_folder + '/scripts',
    app_elements = [
        app_folder + '/images',
        app_folder + '/lib',
        app_folder + '/styles'
    ],
    app_scripts_elements = [
        scripts_folder + '/components',
        scripts_folder + '/constants',
        scripts_folder + '/factories',
        scripts_folder + '/filters',
        scripts_folder + '/services'
    ],
    test_spec_folder = './test/spec',
    test_spec_elements = [
        test_spec_folder + '/components',
        test_spec_folder + '/constants',
        test_spec_folder + '/factories',
        test_spec_folder + '/filters',
        test_spec_folder + '/services'
    ];

module.exports = {
    app: [].concat(app_elements, app_scripts_elements),
    test: [].concat(test_spec_elements),
    indexFile: app_folder.concat('/index.html'),
    mainCssFile: app_folder.concat('/styles/main.css'),
    karmaFile: './test/karma.config.js'
};
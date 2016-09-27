'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chalk = require('chalk'),
    prompts = require('./prompts'),
    init = require('./initialize'),
    config = require('./configure'),
    write = require('./write'),
    install = require('./install');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
        // remove if not used.
    },
    initializing: function () {
        init.paths(this);
    },
    prompting: function () {
        var done = this.async();
        prompts.promptForNewProject(this, done);
    },
    configuring: function () {
        config.configure(this);
    },
    default: function () {
        // remove if not used.
    },
    writing: function () {
        write.setup(this);
    },
    conflicts: function () {
        // remove if not used.
    },
    install: {
        method1: function () {
            var done = this.async();
            install.installDependencies(this, done);
        },
        method2: function () {
            install.installKarma(this);
        }
    },
    end: function (){
        console.log('Done!');
    }
});
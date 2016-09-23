'use strict';

var generators = require('yeoman-generator'),
    pathExists = require('path-exists'),
    prompts = require('./prompting.js'),
    config = require('./configuring.js'),
    write = require('./writing.js'),
    paths = require('./paths.js'),
    _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
       generators.Base.apply(this, arguments);
    },
    initializing: function(){
        this.componentName = '';
        paths.configureDestinationPath(this);
    },
    prompting: function(){
        var done = this.async();
        prompts.promptForComponentName(this, done);
    },
    configuring: function(){
        config.configure(this);
    },
    writing: function (){
        var generator = this,
            done = this.async();

        pathExists(paths.path_to_components.concat('/', this.config.get('kebabName'), '/', this.config.get('camelName'), '.js'))
        .then(function(exists){
            if(exists === true) {
                console.log('Component already exists with this name. Exiting generator...');
                process.exit(1);
            } else {
                write.createNewComponent(generator);
            }
            done();
        });
    },
    end: {
        cleanup : function() {
            delete this.componentName;
            this.config.delete('kebabName');
            this.config.delete('camelName');
            this.config.delete('controllerAs');
        },
        sayBye: function() {
            console.log('Your component was successfully created. Good-bye.');
        }
    }
});
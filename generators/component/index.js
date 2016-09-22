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

        /*
            Use path exists module to check if the component has been created. This checks for the javascript file only
            because all components have a javascript file; however, some do not have an html, and example file.
        */
        pathExists(paths.path_to_components.concat('/', this.config.get('kebabName'), '/', this.config.get('camelName'), '.js'))
        .then(function(exists){
            if(exists === true) {
                // If the component already exits, notify the user and exit the program.
                console.log('Component already exists with this name. Exiting generator...');
                process.exit(1);
            } else {
                // Else, create the new component.
                write.createNewComponent(generator);
            }
            done();
        });
    },
    end: {
        /*
            Removes the config variables that was created from the generator.
        */
        cleanup : function() {
            delete this.componentName;
            this.config.delete('kebabName');
            this.config.delete('camelName');
            this.config.delete('controllerAs');
        },
        /*
            Tells the user Good-Bye.
        */
        sayBye: function() {
            console.log('Your component was successfully created. Good-bye.');
        }
    }
});
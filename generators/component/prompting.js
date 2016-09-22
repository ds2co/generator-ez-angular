'use strict';

var _ = require('lodash');

/*
    Prompts the end user to input a component name in kebab case.
    Example: this-is-the-example
*/
function newComponentPrompt(context, done) {
    return context.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter your component name [kebab case]: ',
        default: 'new-component'
    }]).then(function(answers){
        // Determine if the user ended a name in kebab case,
        // If not, go to retry prompt.
        if(answers.name && answers.name === _.kebabCase(answers.name)) {
            context.componentName = answers.name;
            done();
        } else {
            retryPrompt(context, done);
        }
    }.bind(context));
}

/*
    Prompts the user to either retry entering the name or to exit
    the generator.
*/
function retryPrompt(context, done) {
    return context.prompt([{
        type: 'confirm',
        name: 'retry',
        message: 'Component name was not in kebab case, Would you like to retry? [Y/n]'
    }]).then(function(answers){
        if(answers.retry === true){
            newComponentPrompt(context, done);
        } else if(answers.retry === false) {
            console.log('exiting program...');
            process.exit(1);
        } else {
            retryPrompt(context, done);
        }
    }.bind(context));
}

module.exports = {
    promptForComponentName: newComponentPrompt
};
'use strict';

var _ = require('lodash');

module.exports = {
    promptForNewProject: promptForNewProject
};

function promptForNewProject(context, done) {
    return context.prompt([
        {
            type: 'input',
            name: 'moduleName',
            message: 'Enter a name for new project:',
            default: 'new.project'
        },
        {
            type: 'input',
            name: 'destination',
            message: 'Enter location for new project:',
            default: context.destinationRoot()
        },
        {
            type: 'list',
            name: 'cssFramework',
            message: 'Would you like to use Bootstrap or SemanticUI?',
            choices: ['Bootstrap', 'Semantic', 'neither']
        }
    ]).then(function(answers) {
        answers.moduleName = removedSpacing(answers.moduleName);
        answers.cssFramework = answers.cssFramework === 'neither' ? null : _.toLower(answers.cssFramework);
        context.answers = answers;
        done();
    }.bind(context));
}

function removedSpacing(x) {
    return x.replace(/\s/g, '.');
}

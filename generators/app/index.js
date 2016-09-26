'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chalk = require('chalk');

var options = [
    'project',
    'module',
    'component',
    'service',
    'factory',
    'constant',
    'filter'
];

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);

        this.argument('action', {
            type: String,
            optional: true,
            required: false,
            default: null
        });

        if(this.action) {
            this.action = _.toLower(this.action);
        }
    },
    initializing: function(){
        if(this.action && options.indexOf(this.action) < 0) {
            this.action = null;
        }
    },
    prompting: function(){
        if(!this.action) {
            return this.prompt([{
                type: 'list',
                name: 'action',
                message: 'What would you like to create?',
                choices: options
            }]).then(function(answers){
                this.action = answers.action;
            }.bind(this));
        }
    },
    default: function(){
        switch(this.action) {
            case 'project':
                this.composeWith('ez-angular:project');
                break;
            case 'component':
                //this.composeWith('ez-angular:component');
                console.log(chalk.cyan('\nCurrently being updated!.\n'));
                break;
            case 'module':
            case 'service':
            case 'factory':
            case 'constant':
            case 'filter':
                console.log(chalk.magenta('\nNot Implemented.\n¯\\_(ツ)_/¯\nComing Soon...\n'));
                break;
            default:
                console.log(chalk.red.bold('This is not a valid option.'));
                break;
        }
    },
    end: function (){
        console.log(this.action);
    }
});
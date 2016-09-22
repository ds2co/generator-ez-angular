'use strict';

var generators = require('yeoman-generator'),
    _ = require('lodash'),
    chalk = require('chalk');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);

        // custom actions
    },
    initializing: function () {

    },
    prompting: function () {

    },
    default: function () {

    },
    writing: function () {

    },
    conflicts: function () {

    },
    install: function () {

    },
    end: function (){
        console.log('Made it here!');
    }
});
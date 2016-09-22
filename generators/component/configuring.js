'use strict';

var _ = require('lodash'),
    path_to_components = '../app/scripts/components';

/*
    The configure method is the only method that will be exported.
    Calls the methods needed to configure the generator based on
    user input.
*/
function configure(context) {
    setUserVariables(context);
}

/*
    Sets the user variable in the generators config so they can be
    used to replace the placeholders in the template files.
*/
function setUserVariables(context) {
    context.config.set({
        kebabName: context.componentName,
        camelName: _.camelCase(context.componentName),
        controllerAs: getControllerAs(context.componentName)
    });
}

/*
    Returns a controller name that is the first letter of each word in
    the component's name.
*/
function getControllerAs(name) {
    var ctrlAs = '';
    name.split('-').forEach(function(x){
        ctrlAs += x.charAt(0);
    });
    return ctrlAs;
}

module.exports = {
    configure: configure
};
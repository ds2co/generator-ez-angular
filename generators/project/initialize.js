'use strict';

module.exports = {
    paths: initializePaths
};

function initializePaths(context) {
    var base = context.destinationPath();

    if(base.indexOf('/') >= 0) {
        base = base.replace('/generator-ez-angular', '');
    } else if(base.indexOf('\\') >= 0) {
        base = base.replace('\\generator-ez-angular', '');
    }

    context.destinationRoot(base);
}
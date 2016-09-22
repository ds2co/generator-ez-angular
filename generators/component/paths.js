'use strict';

/*
    Allows this to be ran from the www or the generator-create-components folder.
    Sets the destinationPath to the correct directory.
*/
function configureDestinationPath(context) {
    var base = context.destinationRoot(),
        sptPath = base.split('\\');

    if(sptPath[sptPath.length - 1] !== 'www') {
        if (sptPath[sptPath.length - 1] === 'generator-create-component') {
            sptPath.pop();
            base = sptPath.join('\\');
            context.destinationRoot(base);
        } else {
            console.log('There is an issue configuring your path. Please try again.');
            process.exit(1);
        }
    }
}

module.exports = {
    configureDestinationPath: configureDestinationPath,
    path_to_components: './app/scripts/components',
    path_to_test_directory: './test/spec/components',
    index_path: './app/index.html',
    examples_path: './app/scripts/examples.html'
};
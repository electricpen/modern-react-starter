// Webpack is a program that compiles JS files into a single file. It is very modular so it an be used to compile many
// different types of projects. This example is going to be set up to compile React but it can be altered to fit
// other project types simply by changing the *rules* in the module object.

// Basic webpack has three parts - an entry, an output, and module
// The entry defines where your javascript files start from. It is the root of your javascript dependency tree
// The output is a path to a file where webpack saves its bundle
// The module contains a list of rules
    // rules contain 3 main parts:
        // a *test* that describes (with regex) files that need to be processed
        // an *exclude* that describes folders/files that should be skipped
        // a *use* that contains the modules that will be used to compile the files in the test for this set of rules
    // there can be more than one set of rules (CSS compilation is another common one) but our simple example is just for React

// path library imported to help with directory path definitions
const path = require('path');

module.exports = {
    // Path to my entry file
    entry: path.resolve(__dirname, 'client/index.js'),

    // path to where I want my webpack compiled code (bundle) to be saved
    output: {
        path: path.resolve(__dirname, 'client/dist'),
        filename: 'bundle.js',
    },

    // Babel config for react
    module: {
        rules: [
          {
            // test contains a regex that will be run on every file in this project - any matches will be run through the loader
            test: /\.(js|jsx)$/,

            // exclude contains a regex that will cause the *test* above to skip if a folder or file matches it
            exclude: /node_modules/,

            // contains an array containing the loaders we want to use to transform/transpile/compile our files before adding the to the bundle
            use: ['babel-loader'],
          },
        ],

    },

    // resolve.extensions will allow use of *require* or *import* without typing extensions 
    // (as long as the extension is in this list)
    // this property is optional
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },

    // devServer will serve your react static files for testing only
    // This property is optional
    // You must npm install webpack-dev-server for this to work
    devServer: {
        // 
        static: path.resolve('client/dist'),
    },
};
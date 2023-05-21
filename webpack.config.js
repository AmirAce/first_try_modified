const path = require('path');

module.exports = {
    entry: '/statics/js/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'statics/js'),
    },
};

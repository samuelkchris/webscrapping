const path = require('path');

module.exports = {
  entry: './webpack/main.js', // Entry point for your JavaScript files
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  mode: 'production' // or 'development'
};

const path = require('path');

module.exports = {
  name: 'development',
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.development.json'
          }
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname,'dist','development'),
    clean: true,
  },
};

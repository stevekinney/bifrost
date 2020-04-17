const fs = require('fs');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);

const src = path.join(__dirname, 'src');
const applications = fs.readdirSync(path.join(__dirname, 'applications'));

const entryPoints = applications.reduce((entries, application) => {
  return {
    ...entries,
    [application]: path.join(__dirname, 'applications', application, 'index'),
  };
}, {});

module.exports = {
  mode: 'development',
  entry: { shell: path.join(src, 'index.js'), ...entryPoints },
  output: {
    path: path.join(__dirname, 'dist', '_bundles'),
    filename: '[name].js',
    publicPath: process.env.BASE_PATH ? `/${process.env.BASE_PATH}/` : '/',
    pathinfo: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['shell'],
      title: 'Bifrost',
      inject: true,
      template: path.join(__dirname, 'public', 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html'),
    }),
    ...applications.map((file) => {
      return new HtmlWebpackPlugin({
        chunks: [file],
        title: capitalize(file),
        inject: true,
        template: path.join(__dirname, 'public', 'application.html'),
        filename: path.join(__dirname, 'dist', file, 'index.html'),
      });
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
    },
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      entrypoints: false,
      errors: true,
      hash: false,
      modules: false,
      timings: false,
      version: false,
      warnings: true,
    },
    hot: true,
    compress: true,
  },
};

import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV === 'production';

module.exports = {
  entry: {
    app: './app',
    vendor: [
      'axios',
      'babel-polyfill',
      'classnames',
      'fastclick',
      'immutable',
      'normalize.css',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-transition-group',
      'redux',
      'redux-immutable',
      'redux-logger',
      'redux-saga',
      'reselect'
    ]
  },

  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },

  resolve: {
    extensions: [
      '.jsx', '.js', '.json', '.less'
    ],
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!less-loader'
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]'
      }, {
        test: /\.(xml|html|txt)$/,
        loader: 'raw-loader'
      }, {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: 'assets/fonts/[name].[ext]'
          }
        }]
      }
    ]
  },

  // postcss: () => [autoprefixer({ browsers: 'last 2 versions' })],

  plugins: ([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.min.css',
      allChunks: true
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(ENV) }),
    new HtmlWebpackPlugin({ template: 'app/index.ejs' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]).concat(ENV === 'production' ? [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: [autoprefixer({ browsers: 'last 2 versions' })],
        context: path.join(__dirname, './app')
      }
    })
  ] : [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer({ browsers: 'last 2 versions' })],
        context: path.join(__dirname, './app')
      }
    })]),

  stats: {
    colors: true
  },

  devtool: ENV === 'production' ? 'source-map' : 'inline-source-map',

  devServer: {
    port: process.env.PORT || 3000,
    host: 'localhost',
    publicPath: '/',
    contentBase: './app',
    historyApiFallback: true,
    compress: isProd,
    inline: !isProd,
    hot: !isProd
  }
};

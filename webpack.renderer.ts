import path from 'path';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends webpack.Configuration {
  devServer?: DevServerConfiguration;
}

const isDev = process.env.NODE_ENV === 'development';

const config: Configuration = {
  mode: isDev ? 'development' : 'production',
  target: 'web',
  entry: './src/Index.tsx',
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: isDev ? 'inline-source-map' : false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    isDev && new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
  },
};

export default config;


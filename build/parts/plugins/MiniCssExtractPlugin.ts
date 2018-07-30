'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from 'webpack';

import process from '../../definitions/process';

// -----------------------------------------------------------------------------

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ?
        'css/[name].[contenthash].css' :
        'css/[name].css',
      chunkFilename: process.env.NODE_ENV === 'production' ?
        'css/[name].[contenthash].css' :
        'css/[name].css',
    }),
  ],
};

// -----------------------------------------------------------------------------

export default partConfig;

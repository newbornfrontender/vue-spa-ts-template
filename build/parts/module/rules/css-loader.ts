'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from 'webpack';

import process from '../../../definitions/process';

// -----------------------------------------------------------------------------

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  module: {
    rules: [{
      test: /\.css$/,
      // include,
      // exclude,
      use: [
        process.env.NODE_ENV === 'production' ?
          MiniCssExtractPlugin.loader :
          'vue-style-loader',
        'css-loader',
      ],
    }],
  },
};

// -----------------------------------------------------------------------------

export default partConfig;

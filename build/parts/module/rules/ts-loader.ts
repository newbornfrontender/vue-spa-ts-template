'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from 'webpack';

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'ts-loader',
      }],
    }],
  },
};

// -----------------------------------------------------------------------------

export default partConfig;

'use strict';

import { Configuration } from 'webpack';

const partConfig: Configuration = {
  module: {
    rules: [{
      test: /\.ts$/,
      // include,
      // exclude,
      use: [ 'ts-loader' ],
    }],
  },
};

export default partConfig;

'use strict';

// -----------------------------------------------------------------------------

import { Configuration, DefinePlugin } from 'webpack';

import process from '../../definitions/process';

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};

// -----------------------------------------------------------------------------

export default partConfig;

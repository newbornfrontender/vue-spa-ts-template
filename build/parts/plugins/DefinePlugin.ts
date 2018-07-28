'use strict';

// -----------------------------------------------------------------------------

import { Configuration, DefinePlugin } from 'webpack';

// -----------------------------------------------------------------------------

declare const process: {
  env: {
    NODE_ENV: string;
  };
};

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

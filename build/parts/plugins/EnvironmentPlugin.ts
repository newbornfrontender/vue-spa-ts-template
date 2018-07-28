'use strict';

// -----------------------------------------------------------------------------

import { Configuration, EnvironmentPlugin } from 'webpack';

// -----------------------------------------------------------------------------

declare const process: {
  env: {
    NODE_ENV: string;
  };
};

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  plugins: [
    new EnvironmentPlugin([
      'NODE_ENV',
    ]),
  ],
};

// -----------------------------------------------------------------------------

export default partConfig;

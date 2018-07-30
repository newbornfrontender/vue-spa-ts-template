'use strict';

// -----------------------------------------------------------------------------

import { Configuration, EnvironmentPlugin } from 'webpack';

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

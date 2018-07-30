'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from 'webpack';

import { resolve } from 'path';

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  entry: {
    index: resolve(__dirname, '../../src/index.ts'),
  },
};

// -----------------------------------------------------------------------------

export default partConfig;

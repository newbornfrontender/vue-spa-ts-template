'use strict';

import { Configuration } from 'webpack';
import { resolve } from 'path';

const config: Configuration = {
  entry: {
    index: resolve(__dirname, '../../src/index.js'),
  },
};

export default config;

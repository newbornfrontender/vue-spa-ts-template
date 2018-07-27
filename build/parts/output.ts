'use strict';

import { Configuration } from 'webpack';
import { resolve } from 'path';

const config: Configuration = {
  output: {
    path: resolve(__dirname, '../../dist'),
    filename: 'js/[name].js',
  },
};

export default config;

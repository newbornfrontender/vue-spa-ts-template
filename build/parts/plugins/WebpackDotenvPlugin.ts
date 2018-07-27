'use strict';

import { Configuration } from 'webpack';
import { resolve } from 'path';

import WebpackDotenvPlugin from 'webpack-dotenv-plugin';

const config: Configuration = {
  plugins: [
    new WebpackDotenvPlugin({
      sample: resolve(__dirname, '../../../.env/common'),
      path: resolve(__dirname, `../../../.env/${process.env.NODE_ENV}`),
    }),
  ],
};

export default config;

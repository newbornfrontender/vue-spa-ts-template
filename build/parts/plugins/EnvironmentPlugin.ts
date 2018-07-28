'use strict';

declare const process: {
  env: {
    NODE_ENV: string;
    NODE_CUSTOM_ENV: string;
  };
};

import { Configuration, EnvironmentPlugin } from 'webpack';

const config: Configuration = {
  plugins: [
    new EnvironmentPlugin([
      'NODE_ENV',
      'NODE_CUSTOM_ENV',
    ]),
  ],
};

export default config;

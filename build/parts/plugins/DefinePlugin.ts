'use strict';

declare const process: {
  env: {
    NODE_ENV: string;
    NODE_CUSTOM_ENV: string;
  };
};

import { Configuration, DefinePlugin } from 'webpack';

const config: Configuration = {
  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'NODE_CUSTOM_ENV': JSON.stringify(process.env.NODE_CUSTOM_ENV),
      },
    }),
  ],
};

export default config;

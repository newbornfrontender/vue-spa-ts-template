'use strict';

// -----------------------------------------------------------------------------

import { resolve } from 'path';

import { Configuration } from '../definitions/configs/Output';

// -----------------------------------------------------------------------------

import { config } from 'dotenv';

config({
  encoding: 'utf-8',
  path: resolve(__dirname, '../../.env/options'),
});

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  output: {
    path: resolve(__dirname, '../../dist'),
    filename: () => {
      if (process.env.NODE_ENV === 'production') {
        return 'js/[name].[contenthash].js';
      };

      return 'js/[name].js';
    },
    hashDigest: process.env.HASH_DIGEST || 'hex',
    hashDigestLength: Number(process.env.HASH_DIGEST_LENGTH) || 9,
  },
};

// -----------------------------------------------------------------------------

export default partConfig;

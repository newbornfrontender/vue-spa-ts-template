'use strict';

// -----------------------------------------------------------------------------

import process from '../definitions/process';
import { config } from 'dotenv';
import { resolve } from 'path';
import { Configuration } from 'webpack';
import {
  hashDigestValue,
  hashDigestLengthValue,
} from '../modules/utils/process/env';
import {
  hashDigestLog,
  hashDigestLengthLog,
} from '../modules/utils/console/log';

// -----------------------------------------------------------------------------

config({
  encoding: 'utf-8',
  path: resolve(__dirname, '../../.env/build/production'),
});

// -----------------------------------------------------------------------------

hashDigestLog();
hashDigestLengthLog();

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  output: {
    path: resolve(__dirname, '../../dist'),
    filename: (process.env.NODE_ENV === 'production') ?
      'js/[name].[contenthash].js' :
      'js/[name].js',
    hashDigest: hashDigestValue(process.env.HASH_DIGEST),
    hashDigestLength: hashDigestLengthValue(process.env.HASH_DIGEST_LENGTH),
  },
};

// -----------------------------------------------------------------------------

export default partConfig;

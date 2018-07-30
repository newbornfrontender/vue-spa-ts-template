'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from 'webpack';

// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// -----------------------------------------------------------------------------

import output from '../parts/output';

const productionConfig: Configuration = WebpackMerge(
  output,
);

// -----------------------------------------------------------------------------

import commonConfig from './webpack.common.config';

const buildConfig: Configuration = WebpackMerge(
  commonConfig,
  productionConfig,
);

// -----------------------------------------------------------------------------

export default buildConfig;

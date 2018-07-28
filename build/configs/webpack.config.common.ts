'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from 'webpack';

// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// -----------------------------------------------------------------------------

import DefinePlugin from '../parts/plugins/DefinePlugin';
// import EnvironmentPlugin from '../parts/plugins/EnvironmentPlugin';

const plugins: Configuration = WebpackMerge(
  DefinePlugin,
  // EnvironmentPlugin,
);

// -----------------------------------------------------------------------------

import mode from '../parts/mode';
import entry from '../parts/entry';

const buildConfig: Configuration = WebpackMerge(
  mode,
  entry,
  plugins,
);

// -----------------------------------------------------------------------------

export default buildConfig;

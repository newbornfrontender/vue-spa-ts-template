'use strict';

import { Configuration } from 'webpack';

import WebpackMerge from 'webpack-merge';

import mode from '../parts/mode';
import entry from '../parts/entry';

import WebpackDotenvPlugin from '../parts/plugins/WebpackDotenvPlugin';
// import EnvironmentPlugin from '../parts/plugins/EnvironmentPlugin';
import DefinePlugin from '../parts/plugins/DefinePlugin';

const plugins: Configuration = WebpackMerge(
  WebpackDotenvPlugin,
  // EnvironmentPlugin,
  DefinePlugin,
);

const config: Configuration = WebpackMerge(
  mode,
  entry,
  plugins,
);

export default config;

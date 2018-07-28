'use strict';

import { Configuration } from 'webpack';

import WebpackMerge from 'webpack-merge';

import mode from '../parts/mode';
import entry from '../parts/entry';

// import EnvironmentPlugin from '../parts/plugins/EnvironmentPlugin';
import DefinePlugin from '../parts/plugins/DefinePlugin';
import WebpackDotenvPlugin from '../parts/plugins/WebpackDotenvPlugin';

const plugins: Configuration = WebpackMerge(
  // EnvironmentPlugin,
  DefinePlugin,
  WebpackDotenvPlugin,
);

const config: Configuration = WebpackMerge(
  mode,
  entry,
  plugins,
);

export default config;

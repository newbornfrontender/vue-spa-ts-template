'use strict';

import { Configuration } from 'webpack';

import WebpackMerge from 'webpack-merge';

import mode from '../parts/mode';
import entry from '../parts/entry';

import WebpackDotenvPlugin from '../parts/plugins/WebpackDotenvPlugin';

const plugins: Configuration = WebpackMerge(
  WebpackDotenvPlugin,
);

const config: Configuration = WebpackMerge(
  mode,
  entry,
  plugins,
);

export default config;

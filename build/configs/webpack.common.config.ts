'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from 'webpack';

// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// -----------------------------------------------------------------------------

import tsLoader from '../parts/module/rules/ts-loader';
import cssLoader from '../parts/module/rules/css-loader';

const rules: Configuration = WebpackMerge(
  tsLoader,
  cssLoader,
);

const module: Configuration = WebpackMerge(
  rules,
);

// -----------------------------------------------------------------------------

import DefinePlugin from '../parts/plugins/DefinePlugin';
import MiniCssExtractPlugin from '../parts/plugins/MiniCssExtractPlugin';

const plugins: Configuration = WebpackMerge(
  DefinePlugin,
  MiniCssExtractPlugin,
);

// -----------------------------------------------------------------------------

import mode from '../parts/mode';
import entry from '../parts/entry';

const buildConfig: Configuration = WebpackMerge(
  mode,
  entry,
  module,
  plugins,
);

// -----------------------------------------------------------------------------

export default buildConfig;

'use strict';

// -----------------------------------------------------------------------------

// import { Configuration } from 'webpack';
import CustomConfiguration from '../../../typings/webpack/RuleSetRule';

import process from '../../../definitions/process';

// -----------------------------------------------------------------------------

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// -----------------------------------------------------------------------------

const partConfig: CustomConfiguration = {
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /(node_modules|bower_components)/,
      use: [
        (process.env.NODE_ENV === 'production') ?
          MiniCssExtractPlugin.loader :
          {
            loader: 'vue-style-loader',
          },
        {
          loader: 'css-loader',
        },
      ],
    }],
  },
};

// -----------------------------------------------------------------------------

export default partConfig;

'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from 'webpack';

// -----------------------------------------------------------------------------

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
  ],
};

// -----------------------------------------------------------------------------

export default partConfig;

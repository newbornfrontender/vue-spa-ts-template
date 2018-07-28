'use strict';

import { Mode } from '../definitions/parts/Mode';

const config: Mode = {
  mode: process.env.NODE_ENV || 'development',
};

export default config;

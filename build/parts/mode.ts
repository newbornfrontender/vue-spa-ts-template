'use strict';

import { Mode } from '../definitions/Mode.d';

const config: Mode = {
  mode: process.env.NODE_ENV || 'development',
};

export default config;

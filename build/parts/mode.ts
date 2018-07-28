'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from '../definitions/configs/Mode';

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  mode: process.env.NODE_ENV || 'development',
};

// -----------------------------------------------------------------------------

export default partConfig;

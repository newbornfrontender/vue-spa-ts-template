'use strict';

// -----------------------------------------------------------------------------

import process from '../definitions/process';
import { Configuration } from 'webpack';
import { modeValue } from '../modules/utils/process/env';

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  mode: modeValue(process.env.NODE_ENV),
};

// -----------------------------------------------------------------------------

export default partConfig;

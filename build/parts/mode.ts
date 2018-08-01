'use strict';

// -----------------------------------------------------------------------------

import { Configuration } from 'webpack';
import process from '../definitions/process';

import { modeLog } from '../modules/utils/console/log';
import { modeValue } from '../modules/utils/process/env';

// -----------------------------------------------------------------------------

modeLog();

// -----------------------------------------------------------------------------

const partConfig: Configuration = {
  mode: modeValue(process.env.NODE_ENV),
};

// -----------------------------------------------------------------------------

export default partConfig;

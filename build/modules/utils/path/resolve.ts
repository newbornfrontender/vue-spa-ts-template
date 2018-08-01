'use strict';

import { resolve } from 'path';

const getResolvePath = (deep: string, path: string): string => {
  return resolve(__dirname, deep, path);
};

export {
  getResolvePath as resolvePath,
};

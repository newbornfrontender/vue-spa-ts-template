'use strict';

import process from '../../../definitions/process';

const getModeLog = (): void => {
  switch (process.env.NODE_ENV) {
    case 'development': return console.log('development');
    case 'production': return console.log('production');
    case 'none': return console.log('none');
    default: console.log('development');
  };
};

const getHashDigestLog = (): void => {
  if (
    (process.env.NODE_ENV === 'production') &&
    (process.env.HASH_DIGEST !== 'hex' && 'latin1' && 'base64')
  ) {
    return console.log('getHashDigestLog');
  };
};

const getHashDigestLengthLog = (): void => {
  if (
    (process.env.NODE_ENV === 'production') &&
    (Number(process.env.HASH_DIGEST_LENGTH) <= 0)
  ) {
    return console.log('getHashDigestLengthLog');
  };
};

export {
  getModeLog as modeLog,
  getHashDigestLog as hashDigestLog,
  getHashDigestLengthLog as hashDigestLengthLog,
};

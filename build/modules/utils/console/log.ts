'use strict';

import process from '../../../definitions/process';

const getHashDigestLog = ():void => {
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.HASH_DIGEST !== 'hex' && 'latin1' && 'base64'
  ) {
    return console.log(
      'Please set the "HASH_DIGEST" in ".env/build/production" to "hex", ' +
      '"latin1" or "base64"! Now "HASH_DIGEST" using "hex" value.'
    );
  };
};

const getHashDigestLengthLog = ():void => {
  if (
    process.env.NODE_ENV === 'production' &&
    Number(process.env.HASH_DIGEST_LENGTH) <= 0
  ) {
    return console.log(
      '"HASH_DIGEST_LENGTH" in ".env/build/production" are undefined! ' +
      'Now "HASH_DIGEST_LENGTH" using "10" value.'
    );
  };
};

export {
  getHashDigestLog as hashDigestLog,
  getHashDigestLengthLog as hashDigestLengthLog,
};

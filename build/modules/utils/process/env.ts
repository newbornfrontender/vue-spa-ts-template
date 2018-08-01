'use strict';

const getModeValue = (value: string): 'development' | 'production' | 'none' => {
  switch (value) {
    case 'development': return value;
    case 'production': return value;
    case 'none': return value;
    default: 'development';
  };
};

const getHashDigestValue = (value: string): 'hex' | 'latin1' | 'base64' => {
  switch (value) {
    case 'hex': return value;
    case 'latin1': return value;
    case 'base64': return value;
    default: 'hex';
  };
};

const getHashDigestLengthValue = (value: string): number => {
  if (Number(value) >= 1) {
    return Number(value);
  };

  return 10;
};

export {
  getModeValue as modeValue,
  getHashDigestValue as hashDigestValue,
  getHashDigestLengthValue as hashDigestLengthValue,
};

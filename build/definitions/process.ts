declare const process: {
  env: {
    NODE_ENV: 'development' | 'production' | 'none';

    HASH_DIGEST: 'hex' | 'latin1' | 'base64';
    HASH_DIGEST_LENGTH: string;
  };
};

export default process;

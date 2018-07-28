export = webpack;

declare namespace webpack {
  interface Configuration {
    output?: Output;
  }

  interface DevtoolModuleFilenameTemplateInfo {
    identifier: string;
    shortIdentifier: string;
    resource: any;
    resourcePath: string;
    absoluteResourcePath: string;
    allLoaders: any[];
    query: string;
    moduleId: string;
    hash: string;
  }

  interface Output {
    path?: string;
    filename?: any; // string -> any
    chunkFilename?: string;
    sourceMapFilename?: string;
    devtoolModuleFilenameTemplate?: string | ((info: DevtoolModuleFilenameTemplateInfo) => string);
    devtoolFallbackModuleFilenameTemplate?: string | ((info: DevtoolModuleFilenameTemplateInfo) => string);
    devtoolLineToLine?: boolean;
    hotUpdateChunkFilename?: string;
    hotUpdateMainFilename?: string;
    publicPath?: string;
    jsonpFunction?: string;
    hotUpdateFunction?: string;
    pathinfo?: boolean;
    library?: string | string[];
    libraryTarget?: 'var' | 'this' | 'commonjs' | 'commonjs2' | 'amd' | 'umd' | 'window' | 'assign' | 'jsonp';
    libraryExport?: string | string[];
    umdNamedDefine?: boolean;
    sourcePrefix?: string;
    crossOriginLoading?: string | boolean;
    hashDigest?: any; // 'hex' | 'latin1' | 'base64' -> any
    hashDigestLength?: any; // number -> any
    hashFunction?: string | ((algorithm: string, options?: any) => any);
    hashSalt?: string;
    globalObject?: string;
  }
}

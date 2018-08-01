import * as webpack from 'webpack';

interface CustomRuleSetRule extends webpack.Configuration {
  test: webpack.Condition | webpack.Condition[];
  exclude: webpack.Rule | webpack.Rule[];
  use: webpack.Loader | webpack.Loader[];
}

interface CustomConfiguration extends webpack.Configuration {
  module: {
    rules: CustomRuleSetRule[];
  };
}

export default CustomConfiguration;

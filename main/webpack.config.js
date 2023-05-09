const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'dc';
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'main',
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};

const webpack = require('webpack');
const merge = require('webpack-merge');
const nrwlConfig = require('@nrwl/react/plugins/webpack');

module.exports = (config) => {
  config = nrwlConfig(config);
  return merge(config, {
    plugins: [
      new webpack.DefinePlugin({
        WEB_BASE_API_URL: JSON.stringify(process.env.WEB_BASE_API_URL),
        WEB_SIGNALR_URL: JSON.stringify(process.env.WEB_SIGNALR_URL),
      }),
    ],
  });
};

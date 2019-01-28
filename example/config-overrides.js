const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { addWebpackResolve, override } = require('customize-cra');

module.exports = override(
  addWebpackResolve({
    alias: { react: require.resolve('react') },
  }),
);

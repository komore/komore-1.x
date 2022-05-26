module.exports = function (config) {
  return {
    ...config,
    externals: {
      vscode: 'commonjs vscode',
    },
  };
};

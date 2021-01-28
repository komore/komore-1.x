//const { compileElement } = require('@komore/element/compiler');
const { compileElement } = require('../../dist/modules/element/compiler/index.js');

module.exports = function plugin(x, y) {
  console.log('yaaaa', x, y);

  return {
    name: '@komore/snowpack/element-plugin',
    resolve: {
      input: ['.element'],
      output: ['.js', '.css']
    },
    knownEntrypoints: [
 
    ],
    async load({ filePath, isDev, isSSR, isHmrEnabled }) {
      console.log('gotta load', x);//filePath, isHmrEnabled, isSSR);
      compileElement(filePath);
      throw new Error('oopsie');
    }
  }
}

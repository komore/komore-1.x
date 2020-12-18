module.exports = {
  testMatch: ['**/modules/layer/file/src/**/*.spec.ts'],
  name: 'layer-file',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/layer-file',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

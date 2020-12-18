module.exports = {
  testMatch: ['**/modules/layer/image/src/**/*.spec.ts'],
  name: 'layer-image',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/layer-image',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/layer/src/**/*.spec.ts'],
  name: 'layer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/layer',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

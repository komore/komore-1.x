module.exports = {
  testMatch: ['**/modules/function/pulsar/src/**/*.spec.ts'],
  name: 'function-pulsar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/function-pulsar',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

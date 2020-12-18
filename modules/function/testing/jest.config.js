module.exports = {
  testMatch: ['**/modules/function/testing/src/**/*.spec.ts'],
  name: 'function-testing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/function-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

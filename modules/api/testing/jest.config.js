module.exports = {
  testMatch: ['**/modules/api/testing/src/**/*.spec.ts'],
  name: 'api-testing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/api-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

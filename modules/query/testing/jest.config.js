module.exports = {
  testMatch: ['**/modules/query/testing/src/**/*.spec.ts'],
  name: 'query-testing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/query-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

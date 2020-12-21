module.exports = {
  testMatch: ['**/modules/api/testing/src/**/*.spec.ts'],
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/api-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'api-testing'
};

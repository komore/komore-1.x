module.exports = {
  testMatch: ['**/modules/web/testing/src/**/*.spec.ts'],
  name: 'web-testing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/web-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

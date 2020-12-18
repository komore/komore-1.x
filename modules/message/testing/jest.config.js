module.exports = {
  testMatch: ['**/modules/message/testing/src/**/*.spec.ts'],
  name: 'message-testing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/message-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

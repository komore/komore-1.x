module.exports = {
  testMatch: ['**/modules/integration/discord/src/**/*.spec.ts'],
  name: 'integration-discord',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-discord',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/integration/twitter/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-twitter',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-twitter',
  testEnvironment: 'node'
};

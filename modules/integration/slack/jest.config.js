module.exports = {
  testMatch: ['**/modules/integration/slack/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-slack',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-slack',
  testEnvironment: 'node'
};

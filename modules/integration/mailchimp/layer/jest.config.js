module.exports = {
  testMatch: ['**/modules/integration/mailchimp/layer/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-mailchimp-layer',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-mailchimp-layer',
  testEnvironment: 'node'
};

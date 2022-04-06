module.exports = {
  testMatch: ['**/modules/integration/google/cloud-logging/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-google-cloud-logging',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-google-cloudlogging',
  testEnvironment: 'node'
};

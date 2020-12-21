module.exports = {
  testMatch: ['**/modules/integration/google/cloud-logging/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-google-cloud-logging',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-google-cloudlogging'
};

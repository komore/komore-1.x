module.exports = {
  testMatch: ['**/modules/integration/google/cloud-metrics/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-google-cloudmetrics',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-google-cloudmetrics'
};

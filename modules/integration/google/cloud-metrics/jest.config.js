module.exports = {
  testMatch: ['**/modules/integration/google/cloud-metrics/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-google-cloudmetrics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-google-cloudmetrics'
};

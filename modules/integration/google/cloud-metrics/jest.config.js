module.exports = {
  testMatch: ['**/modules/integration/gcp/cloud-metrics/src/**/*.spec.ts'],
  name: 'integration-gcp-cloudmetrics',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-gcp-cloudmetrics',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

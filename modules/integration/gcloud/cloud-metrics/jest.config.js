module.exports = {
  testMatch: ['**/modules/integration/gcloud/cloud-metrics/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-gcloud-cloudmetrics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-gcloud-cloudmetrics',
  testEnvironment: 'node'
};

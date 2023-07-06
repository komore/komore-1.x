module.exports = {
  testMatch: ['**/modules/integration/gcloud/cloud-logging/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-gcloud-cloud-logging',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-gcloud-cloudlogging',
  testEnvironment: 'node'
};

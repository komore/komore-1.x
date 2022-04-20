module.exports = {
  testMatch: ['**/modules/integration/gcloud/cloud-bigtable/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-gcloud-cloudbigtable',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-gcloud-cloudbigtable',
  testEnvironment: 'node'
};

module.exports = {
  testMatch: ['**/modules/integration/gcloud/cloud-pub-sub/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-gcloud-cloudpubsub',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-gcloud-cloudpubsub',
  testEnvironment: 'node'
};

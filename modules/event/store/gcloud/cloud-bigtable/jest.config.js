module.exports = {
  testMatch: ['**/modules/event/store/gcloud/cloud-bigtable/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/event-store-gcloud-cloudbigtable',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-gcloud-cloudbigtable',
  testEnvironment: 'node'
};

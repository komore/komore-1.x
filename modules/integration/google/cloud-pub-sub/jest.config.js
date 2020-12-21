module.exports = {
  testMatch: ['**/modules/integration/google/cloud-pub-sub/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-google-cloud-pub-sub',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-google-cloudpubsub'
};

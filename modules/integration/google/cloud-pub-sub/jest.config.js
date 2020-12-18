module.exports = {
  testMatch: ['**/modules/integration/google/cloud-pub-sub/src/**/*.spec.ts'],
  name: 'integration-google-cloudpubsub',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-google-cloud-pub-sub',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

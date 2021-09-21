module.exports = {
  testMatch: ['**/modules/integration/google/cloud-pub-sub/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-google-cloud-pub-sub',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-google-cloudpubsub',
  testEnvironment: 'node'
};

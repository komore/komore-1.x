module.exports = {
  testMatch: ['**/modules/integration/google/cloud-bigtable/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-google-cloudbigtable',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-google-cloudbigtable'
};

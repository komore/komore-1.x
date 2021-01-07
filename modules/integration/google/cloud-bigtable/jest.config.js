module.exports = {
  testMatch: ['**/modules/integration/google/cloud-bigtable/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-google-cloudbigtable',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-google-cloudbigtable'
};

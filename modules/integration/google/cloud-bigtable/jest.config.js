module.exports = {
  testMatch: ['**/modules/integration/gcp/bigtable/src/**/*.spec.ts'],
  name: 'integration-gcp-bigtable',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-gcp-bigtable',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

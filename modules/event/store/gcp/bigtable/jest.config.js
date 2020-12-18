module.exports = {
  testMatch: ['**/modules/event/store/gcp/bigtable/src/**/*.spec.ts'],
  name: 'event-store-gcp-bigtable',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-store-gcp-bigtable',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

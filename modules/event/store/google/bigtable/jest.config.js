module.exports = {
  testMatch: ['**/modules/event/store/google/bigtable/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-store-google-bigtable',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-google-bigtable'
};

module.exports = {
  testMatch: ['**/modules/event/store/google/bigtable/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/event-store-google-bigtable',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-google-bigtable',
  testEnvironment: 'node'
};

module.exports = {
  testMatch: ['**/modules/event/store/google/cloud-bigtable/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/event-store-google-cloudbigtable',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-google-cloudbigtable',
  testEnvironment: 'node'
};

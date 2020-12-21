module.exports = {
  testMatch: ['**/modules/event/store/amazon/aurora/src/**/*.spec.ts'],
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/event-amazon-aurora',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-amazon-aurora'
};

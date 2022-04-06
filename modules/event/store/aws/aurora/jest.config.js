module.exports = {
  testMatch: ['**/modules/event/store/amazon/aurora/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/event-amazon-aurora',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-amazon-aurora',
  testEnvironment: 'node'
};

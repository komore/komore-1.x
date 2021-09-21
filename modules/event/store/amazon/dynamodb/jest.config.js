module.exports = {
  testMatch: ['**/modules/event/store/amazon/dynamodb/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/event-store-amazon-dynamodb',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-amazon-dynamodb',
  testEnvironment: 'node'
};

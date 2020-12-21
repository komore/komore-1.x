module.exports = {
  testMatch: ['**/modules/event/store/amazon/dynamodb/src/**/*.spec.ts'],
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/event-store-amazon-dynamodb',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-amazon-dynamodb'
};

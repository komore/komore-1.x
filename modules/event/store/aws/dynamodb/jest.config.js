module.exports = {
  testMatch: ['**/modules/event/store/aws/dynamodb/src/**/*.spec.ts'],
  name: 'event-store-aws-dynamodb',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/event-store-aws-dynamodb',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

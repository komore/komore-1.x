module.exports = {
  testMatch: ['**/modules/event/store/aws/dynamodb/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/event-store-aws-dynamodb',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-aws-dynamodb',
  testEnvironment: 'node'
};

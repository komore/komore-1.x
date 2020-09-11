module.exports = {
  testMatch: ['**/modules/event/aws/dynamodb/src/**/*.spec.ts', '!**/modules/event/aws/dynamodb/src/**/*.typing.spec.ts'],
  name: 'event-aws-dynamodb',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-aws-dynamodb',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/event/aws/aurora/src/**/*.spec.ts', '!**/modules/event/aws/aurora/src/**/*.typing.spec.ts'],
  name: 'event-aws-aurora',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-aws-aurora',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

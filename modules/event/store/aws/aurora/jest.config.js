module.exports = {
  testMatch: ['**/modules/event/store/aws/aurora/src/**/*.spec.ts'],
  name: 'event-store-aws-aurora',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/event-aws-aurora',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

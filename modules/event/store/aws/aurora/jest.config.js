module.exports = {
  testMatch: ['**/modules/event/store/aws/aurora/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/event-aws-aurora',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-aws-aurora',
  testEnvironment: 'node'
};

module.exports = {
  testMatch: ['**/modules/event/store/aws/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/event-store-aws',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-aws',
  testEnvironment: 'node'
};

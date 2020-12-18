module.exports = {
  testMatch: ['**/modules/event/store/aws/src/**/*.spec.ts'],
  name: 'event-store-aws',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-store-aws',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

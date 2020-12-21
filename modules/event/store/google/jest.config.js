module.exports = {
  testMatch: ['**/modules/event/store/google/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-store-google',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'event-store-google'
};

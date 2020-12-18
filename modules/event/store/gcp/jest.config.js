module.exports = {
  testMatch: ['**/modules/event/store/gcp/src/**/*.spec.ts'],
  name: 'event-store-gcp',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-store-gcp',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

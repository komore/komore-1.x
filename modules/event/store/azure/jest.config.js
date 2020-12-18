module.exports = {
  testMatch: ['**/modules/event/store/azure/src/**/*.spec.ts'],
  name: 'event-store-azure',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/event-store-azure',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

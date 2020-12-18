module.exports = {
  testMatch: ['**/modules/event/src/**/*.spec.ts'],
  name: 'event',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/event',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

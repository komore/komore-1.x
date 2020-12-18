module.exports = {
  testMatch: ['**/modules/api/src/**/*.spec.ts'],
  name: 'api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/api',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

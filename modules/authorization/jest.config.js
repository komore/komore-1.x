module.exports = {
  testMatch: ['**/modules/authorization/src/**/*.spec.ts'],
  name: 'authorization',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/authorization',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/authorization/src/**/*.spec.ts'],
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/authorization',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'authorization'
};

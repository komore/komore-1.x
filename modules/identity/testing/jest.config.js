module.exports = {
  testMatch: ['**/modules/identity/testing/src/**/*.spec.ts'],
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/identity-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'identity-testing'
};

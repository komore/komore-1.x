module.exports = {
  testMatch: ['**/modules/identity/testing/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/identity-testing',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'identity-testing',
  testEnvironment: 'node'
};

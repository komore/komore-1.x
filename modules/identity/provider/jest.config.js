module.exports = {
  testMatch: ['**/modules/identity/provider/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/identity-provider',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'identity-provider',
  testEnvironment: 'node'
};

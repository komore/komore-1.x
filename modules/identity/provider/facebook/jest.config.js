module.exports = {
  testMatch: ['**/modules/identity/provider/facebook/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/identity-provider-facebook',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'identity-provider-facebook',
  testEnvironment: 'node'
};

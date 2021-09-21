module.exports = {
  testMatch: ['**/modules/identity/provider/google/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/identity-provider-google',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'identity-provider-google',
  testEnvironment: 'node'
};

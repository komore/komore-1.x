module.exports = {
  testMatch: ['**/modules/identity/provider/oauth2/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/identity-provider-oauth2',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'identity-provider-oauth2'
};

module.exports = {
  testMatch: ['**/modules/identity/provider/oidc/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/identity-provider-oidc',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'identity-provider-oidc'
};

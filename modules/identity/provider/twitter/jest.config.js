module.exports = {
  testMatch: ['**/modules/identity/provider/twitter/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/identity-provider-twitter',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'identity-provider-twitter'
};

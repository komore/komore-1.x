module.exports = {
  testMatch: ['**/modules/stack/provider/google/operators/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/stack-provider-google-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-provider-google-operators'
};

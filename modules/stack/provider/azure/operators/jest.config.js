module.exports = {
  testMatch: ['**/modules/stack/provider/azure/operators/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/stack-provider-azure-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-provider-azure-operators'
};

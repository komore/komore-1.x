module.exports = {
  testMatch: ['**/modules/stack/provider/amazon/operators/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/stack-provider-amazon-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-provider-amazon-operators',
  testEnvironment: 'node'
};

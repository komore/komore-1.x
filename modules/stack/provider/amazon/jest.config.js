module.exports = {
  testMatch: ['**/modules/stack/provider/amazon/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/stack-provider-amazon',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-provider-amazon',
  testEnvironment: 'node'
};

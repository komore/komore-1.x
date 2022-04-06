module.exports = {
  testMatch: ['**/modules/observability/provider/amazon/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/observability-amazon',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-provider-amazon',
  testEnvironment: 'node'
};

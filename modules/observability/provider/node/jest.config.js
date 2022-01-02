module.exports = {
  testMatch: ['**/modules/observability/provider/node/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/observability-provider-node',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-provider-node',
  testEnvironment: 'node'
};

module.exports = {
  testMatch: ['**/modules/observability/metrics/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/observability-metrics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-metrics',
  testEnvironment: 'node'
};

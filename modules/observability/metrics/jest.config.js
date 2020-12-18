module.exports = {
  testMatch: ['**/modules/observability/metrics/src/**/*.spec.ts'],
  name: 'observability-metrics',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/observability-metrics',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

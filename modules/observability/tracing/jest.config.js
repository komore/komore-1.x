module.exports = {
  testMatch: ['**/modules/observability/tracing/src/**/*.spec.ts'],
  name: 'observability-tracing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/observability-tracing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/observability/tracing/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/observability-tracing',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-tracing',
  testEnvironment: 'node'
};

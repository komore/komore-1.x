module.exports = {
  testMatch: ['**/modules/observability/logging/src/**/*.spec.ts'],
  name: 'observability-logging',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/observability-logging',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

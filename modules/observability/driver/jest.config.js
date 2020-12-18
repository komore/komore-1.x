module.exports = {
  testMatch: ['**/modules/observability/driver/src/**/*.spec.ts'],
  name: 'observability-driver',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/observability-driver',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

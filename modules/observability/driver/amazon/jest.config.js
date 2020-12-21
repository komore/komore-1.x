module.exports = {
  testMatch: ['**/modules/observability/driver/amazon/src/**/*.spec.ts'],
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/observability-driver-amazon',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  name: 'observability-driver-amazon',
};

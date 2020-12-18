module.exports = {
  testMatch: ['**/modules/observability/driver/aws/src/**/*.spec.ts'],
  name: 'observability-driver-aws',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/observability-driver-aws',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/observability/aws/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/observability-aws',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'observability-aws',
  testEnvironment: 'node'
};

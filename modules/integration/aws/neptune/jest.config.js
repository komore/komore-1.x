module.exports = {
  testMatch: ['**/modules/integration/aws/neptune/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-neptune',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-neptune',
  testEnvironment: 'node'
};

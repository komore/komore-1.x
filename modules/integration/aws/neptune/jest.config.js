module.exports = {
  testMatch: ['**/modules/integration/aws/neptune/src/**/*.spec.ts'],
  name: 'integration-aws-neptune',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-neptune',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

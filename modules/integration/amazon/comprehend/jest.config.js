module.exports = {
  testMatch: ['**/modules/integration/aws/comprehend/src/**/*.spec.ts'],
  name: 'integration-aws-comprehend',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-comprehend',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/integration/aws/x-ray/src/**/*.spec.ts'],
  name: 'integration-aws-xray',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-xray',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

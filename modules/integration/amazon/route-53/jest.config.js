module.exports = {
  testMatch: ['**/modules/integration/aws/route-53/src/**/*.spec.ts'],
  name: 'integration-aws-route53',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-route53',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

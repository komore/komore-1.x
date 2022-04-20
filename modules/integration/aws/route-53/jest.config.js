module.exports = {
  testMatch: ['**/modules/integration/aws/route-53/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-route53',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-route53',
  testEnvironment: 'node'
};

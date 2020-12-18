module.exports = {
  testMatch: ['**/modules/integration/aws/redshift/src/**/*.spec.ts'],
  name: 'integration-aws-redshift',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-redshift',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

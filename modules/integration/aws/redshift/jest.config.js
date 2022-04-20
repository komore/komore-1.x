module.exports = {
  testMatch: ['**/modules/integration/aws/redshift/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-redshift',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-redshift',
  testEnvironment: 'node'
};

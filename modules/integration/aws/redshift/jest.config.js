module.exports = {
  testMatch: ['**/modules/integration/amazon/redshift/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-redshift',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-redshift',
  testEnvironment: 'node'
};

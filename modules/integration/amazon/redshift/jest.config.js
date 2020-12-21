module.exports = {
  testMatch: ['**/modules/integration/amazon/redshift/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-redshift',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-redshift'
};

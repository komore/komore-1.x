module.exports = {
  testMatch: ['**/modules/integration/aws/ses/src/**/*.spec.ts'],
  name: 'integration-aws-ses',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-ses',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

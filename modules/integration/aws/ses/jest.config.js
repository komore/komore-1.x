module.exports = {
  testMatch: ['**/modules/integration/aws/ses/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-ses',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-ses',
  testEnvironment: 'node'
};

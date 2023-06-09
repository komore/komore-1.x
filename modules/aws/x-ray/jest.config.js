module.exports = {
  testMatch: ['**/modules/integration/aws/x-ray/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-xray',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-xray',
  testEnvironment: 'node'
};

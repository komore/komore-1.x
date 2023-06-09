module.exports = {
  testMatch: ['**/modules/integration/aws/aurora/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-aurora',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-aurora',
  testEnvironment: 'node'
};

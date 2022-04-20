module.exports = {
  testMatch: ['**/modules/integration/aws/comprehend/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-comprehend',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-comprehend',
  testEnvironment: 'node'
};

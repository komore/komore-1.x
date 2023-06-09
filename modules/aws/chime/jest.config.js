module.exports = {
  testMatch: ['**/modules/integration/aws/chime/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-chime',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-chime',
  testEnvironment: 'node'
};

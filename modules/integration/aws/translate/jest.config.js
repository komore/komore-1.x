module.exports = {
  testMatch: ['**/modules/integration/aws/translate/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-translate',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-translate',
  testEnvironment: 'node'
};

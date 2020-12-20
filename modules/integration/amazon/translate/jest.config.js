module.exports = {
  testMatch: ['**/modules/integration/aws/translate/src/**/*.spec.ts'],
  name: 'integration-aws-translate',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-translate',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/integration/aws/aurora/src/**/*.spec.ts'],
  name: 'integration-aws-aurora',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-aurora',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/integration/aws/chime/src/**/*.spec.ts'],
  name: 'integration-aws-chime',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-chime',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

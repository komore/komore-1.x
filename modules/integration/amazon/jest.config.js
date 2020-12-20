module.exports = {
  testMatch: ['**/modules/integration/aws/src/**/*.spec.ts'],
  name: 'integration-aws',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-aws',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

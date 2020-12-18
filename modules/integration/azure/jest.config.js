module.exports = {
  testMatch: ['**/modules/integration/azure/src/**/*.spec.ts'],
  name: 'integration-azure',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/integration-azure',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

module.exports = {
  testMatch: ['**/modules/function/azure/src/**/*.spec.ts'],
  name: 'function-azure',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/function-azure',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

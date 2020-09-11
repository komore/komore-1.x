module.exports = {
  testMatch: ['**/modules/process/testing/src/**/*.spec.ts'],
  name: 'process-testing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../coverage/process-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

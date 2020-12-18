module.exports = {
  testMatch: ['**/modules/graph/testing/src/**/*.spec.ts'],
  name: 'graph-testing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/graph-testing',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

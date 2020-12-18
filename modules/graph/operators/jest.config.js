module.exports = {
  testMatch: ['**/modules/graph/operators/src/**/*.spec.ts'],
  name: 'graph-operators',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/graph-operators',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

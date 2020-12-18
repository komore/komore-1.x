module.exports = {
  testMatch: ['**/modules/graph/src/**/*.spec.ts'],
  name: 'graph',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/graph',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

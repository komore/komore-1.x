module.exports = {
  testMatch: ['**/modules/graph/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/graph',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'graph',
  testEnvironment: 'node'
};

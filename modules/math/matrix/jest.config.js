module.exports = {
  testMatch: ['**/modules/math/matrix/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/math-matrix',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'math-matrix',
  testEnvironment: 'node'
};

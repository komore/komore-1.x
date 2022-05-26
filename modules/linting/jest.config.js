module.exports = {
  testMatch: ['**/modules/linting/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/linting',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'linting',
  testEnvironment: 'node'
};

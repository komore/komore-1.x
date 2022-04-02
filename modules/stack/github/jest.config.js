module.exports = {
  testMatch: ['**/modules/stack/github/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/stack-github',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-github',
  testEnvironment: 'node'
};

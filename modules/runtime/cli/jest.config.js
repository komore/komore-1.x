module.exports = {
  testMatch: ['**/modules/runtime/cli/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/runtime-cli',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'runtime-cli',
  testEnvironment: 'node'
};

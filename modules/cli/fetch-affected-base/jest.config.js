module.exports = {
  testMatch: ['**/modules/cli/fetch-affected-base/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/cli-fetchaffectedbase',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cli-fetchaffectedbase'
};

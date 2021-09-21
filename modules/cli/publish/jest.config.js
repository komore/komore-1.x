module.exports = {
  testMatch: ['**/modules/cli/publish/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/cli-publish',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cli-publish',
  testEnvironment: 'node'
};

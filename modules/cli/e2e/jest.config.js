module.exports = {
  testMatch: ['**/modules/cli/e2e/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../coverage/cli-e2e',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cli-e2e',
  maxWorkers: 1
};

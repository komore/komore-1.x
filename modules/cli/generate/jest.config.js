module.exports = {
  testMatch: ['**/modules/cli/generate/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/cli-generate',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'cli-generate',
  testEnvironment: 'node'
};

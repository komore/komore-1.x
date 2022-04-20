module.exports = {
  testMatch: ['**/modules/schematics/runner/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/schematics-runner',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'schematics-runner',
  testEnvironment: 'node'
};

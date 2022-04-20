module.exports = {
  testMatch: ['**/modules/testing/schematics/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/testing-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'testing-schematics',
  setupFilesAfterEnv: ['./test-setup.ts'],
  testEnvironment: 'node'
};

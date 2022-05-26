module.exports = {
  testMatch: ['**/modules/lint/schematics/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/lint-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'lint',
  testEnvironment: 'node'
};

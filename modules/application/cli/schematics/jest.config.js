module.exports = {
  testMatch: ['**/modules/application/cli/schematics/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/application-cli-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'application-cli-schematics',
  testEnvironment: 'node'
};

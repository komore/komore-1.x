module.exports = {
  testMatch: ['**/modules/stack/schematics/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/stack-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-schematics',
  testEnvironment: 'node'
};

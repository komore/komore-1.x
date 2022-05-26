module.exports = {
  testMatch: ['**/modules/schematics/rust/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/schematics-rust',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'schematics-rust',
  testEnvironment: 'node'
};

module.exports = {
  testMatch: ['**/modules/schematics/testing/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/schematics-testing',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'schematics-testing'
};

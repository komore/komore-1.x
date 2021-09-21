module.exports = {
  testMatch: ['**/modules/schematics/stack/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/schematics-stack',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'schematics-stack',
  testEnvironment: 'node'
};

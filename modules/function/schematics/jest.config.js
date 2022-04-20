module.exports = {
  testMatch: ['**/modules/function/schematics/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/function-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-schematics',
  testEnvironment: 'node'
};

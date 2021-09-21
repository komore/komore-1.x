module.exports = {
  testMatch: ['**/modules/reactive/promise/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/reactive-promise',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'reactive-promise',
  testEnvironment: 'node'
};

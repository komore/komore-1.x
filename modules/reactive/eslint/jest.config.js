module.exports = {
  testMatch: ['**/modules/reactive/eslint/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/reactive-eslint',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'reactive-eslint'
};

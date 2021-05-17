module.exports = {
  testMatch: ['**/modules/runtime/browser/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/runtime-browser',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'runtime-browser'
};

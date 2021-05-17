module.exports = {
  testMatch: ['**/modules/runtime/filesystem/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/runtime-filesystem',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'runtime-filesystem'
};

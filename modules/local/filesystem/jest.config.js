module.exports = {
  testMatch: ['**/modules/local/filesystem/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/local-filesystem',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'local-filesystem'
};

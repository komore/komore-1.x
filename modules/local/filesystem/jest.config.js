module.exports = {
  testMatch: ['**/modules/local/filesystem/src/**/*.spec.ts'],
  name: 'local-filesystem',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/local-filesystem',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

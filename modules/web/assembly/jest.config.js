module.exports = {
  testMatch: ['**/modules/web/assembly/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/web-assembly',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-assembly',
  testEnvironment: 'node'
};

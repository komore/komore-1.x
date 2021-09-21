module.exports = {
  testMatch: ['**/modules/dev-server/core/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/devserver-core',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver-core',
  testEnvironment: 'node'
};

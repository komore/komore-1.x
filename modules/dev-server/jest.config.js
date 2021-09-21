module.exports = {
  testMatch: ['**/modules/dev-server/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/devserver',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'devserver',
  testEnvironment: 'node'
};

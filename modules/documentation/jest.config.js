module.exports = {
  testMatch: ['**/modules/documentation/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/documentation',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'documentation',
  testEnvironment: 'node'
};

module.exports = {
  testMatch: ['**/modules/lint/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/lint',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'lint',
  testEnvironment: 'node'
};

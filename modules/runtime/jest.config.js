module.exports = {
  testMatch: ['**/modules/runtime/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/runtime',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'runtime',
  testEnvironment: 'node'
};

module.exports = {
  testMatch: ['**/modules/validation/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/validation',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'validation',
  testEnvironment: 'node'
};

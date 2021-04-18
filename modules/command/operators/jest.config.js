module.exports = {
  testMatch: ['**/modules/command/operators/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../coverage/command-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'command-operators'
};

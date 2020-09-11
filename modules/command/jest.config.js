module.exports = {
  testMatch: ['**/modules/command/src/**/*.spec.ts', '!**/modules/command/src/**/*.typing.spec.ts'],
  name: 'command',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/command',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

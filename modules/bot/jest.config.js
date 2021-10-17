module.exports = {
  testMatch: ['**/modules/bot/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/bot',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'bot',
  testEnvironment: 'node'
};

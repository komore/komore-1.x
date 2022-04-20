module.exports = {
  testMatch: ['**/modules/bot/github/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/bot-github',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'bot-github',
  testEnvironment: 'node'
};

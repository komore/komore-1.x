module.exports = {
  testMatch: ['**/modules/bot/mdn/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/bot-mdn',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'bot-mdn',
  testEnvironment: 'node'
};

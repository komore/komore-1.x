module.exports = {
  testMatch: ['**/modules/bot/stack/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/bot-stack',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'bot-stack',
  testEnvironment: 'node'
};

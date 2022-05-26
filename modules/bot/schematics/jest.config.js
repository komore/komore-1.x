module.exports = {
  testMatch: ['**/modules/bot/schematics/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/bot-schematics',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'bot-schematics',
  testEnvironment: 'node'
};

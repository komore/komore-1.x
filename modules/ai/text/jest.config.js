module.exports = {
  testMatch: ['**/modules/ai/text/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/ai-text',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'ai-text'
};

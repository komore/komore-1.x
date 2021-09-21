module.exports = {
  testMatch: ['**/modules/web/speech/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/web-speech',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-speech',
  testEnvironment: 'node'
};

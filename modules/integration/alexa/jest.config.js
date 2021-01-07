module.exports = {
  testMatch: ['**/modules/integration/alexa/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-alexa',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-alexa'
};

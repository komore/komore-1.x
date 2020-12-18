module.exports = {
  testMatch: ['**/modules/integration/alexa/src/**/*.spec.ts'],
  name: 'integration-alexa',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-alexa',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

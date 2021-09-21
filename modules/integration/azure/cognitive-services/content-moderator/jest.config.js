module.exports = {
  testMatch: ['**/modules/integration/azure/cognitive-services/content-moderator/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-azure-cognitiveservices-contentmoderator',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure-cognitiveservices-contentmoderator',
  testEnvironment: 'node'
};

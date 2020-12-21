module.exports = {
  testMatch: ['**/modules/integration/azure/cognitive-services/face/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-azure-cognitiveservices-face',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure-cognitiveservices-face'
};

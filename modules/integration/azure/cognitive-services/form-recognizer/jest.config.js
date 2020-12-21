module.exports = {
  testMatch: ['**/modules/integration/azure/cognitive-services/form-recognizer/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-azure-cognitiveservices-formrecognizer',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure-cognitiveservices-formrecognizer'
};

module.exports = {
  testMatch: ['**/modules/integration/azure/cognitive-services/computer-vision/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-azure-cognitiveservices-computervision',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure-cognitiveservices-computervision',
  testEnvironment: 'node'
};

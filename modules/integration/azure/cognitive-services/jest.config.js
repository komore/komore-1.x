module.exports = {
  testMatch: ['**/modules/integration/azure/cognitive-services/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-azure-cognitiveservices',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure-cognitiveservices'
};

module.exports = {
  testMatch: ['**/modules/integration/amazon/rekognition/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-rekognition',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-rekognition'
};

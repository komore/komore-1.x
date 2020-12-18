module.exports = {
  testMatch: ['**/modules/integration/aws/rekognition/src/**/*.spec.ts'],
  name: 'integration-aws-rekognition',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/integration-aws-rekognition',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};

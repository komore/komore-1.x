module.exports = {
  testMatch: ['**/modules/integration/aws/rekognition/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-aws-rekognition',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-aws-rekognition',
  testEnvironment: 'node'
};

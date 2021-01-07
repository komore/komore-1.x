module.exports = {
  testMatch: ['**/modules/sample/integration/aws/s3-file-upload/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/sample-integration-aws-s3fileupload',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'sample-integration-aws-s3fileupload'
};

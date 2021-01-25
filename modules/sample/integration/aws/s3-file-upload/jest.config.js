module.exports = {
  testMatch: ['**/modules/sample/integration/amazon/s3-file-upload/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/sample-integration-amazon-s3fileupload',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'sample-integration-amazon-s3fileupload'
};

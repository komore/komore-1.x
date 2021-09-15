module.exports = {
  testMatch: ['**/modules/function/lambda/kinesis/firehose/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/function-lambda-kinesis-firehose',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-lambda-kinesis-firehose'
};

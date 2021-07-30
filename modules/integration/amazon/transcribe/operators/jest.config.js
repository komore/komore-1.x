module.exports = {
  testMatch: ['**/modules/integration/amazon/transcribe/operators/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-amazon-transcribe-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-transcribe'
};

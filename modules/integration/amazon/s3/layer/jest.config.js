module.exports = {
  testMatch: ['**/modules/integration/amazon/s3/layer/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-amazon-s3-layer',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-s3-layer'
};

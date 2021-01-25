module.exports = {
  testMatch: ['**/modules/integration/amazon/ses/layer/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/integration-amazon-ses-layer',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-ses-layer'
};

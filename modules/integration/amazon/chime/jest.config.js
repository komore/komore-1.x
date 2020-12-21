module.exports = {
  testMatch: ['**/modules/integration/amazon/chime/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-chime',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-chime'
};

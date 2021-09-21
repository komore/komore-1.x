module.exports = {
  testMatch: ['**/modules/integration/amazon/x-ray/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-xray',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-xray',
  testEnvironment: 'node'
};

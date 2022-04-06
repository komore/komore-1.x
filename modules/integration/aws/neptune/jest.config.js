module.exports = {
  testMatch: ['**/modules/integration/amazon/neptune/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-amazon-neptune',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-amazon-neptune',
  testEnvironment: 'node'
};

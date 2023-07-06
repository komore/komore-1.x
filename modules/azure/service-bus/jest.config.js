module.exports = {
  testMatch: ['**/modules/integration/azure/service-bus/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-azure-servicebus',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-azure-servicebus',
  testEnvironment: 'node'
};

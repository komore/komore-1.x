module.exports = {
  testMatch: ['**/modules/integration/sendgrid/layer/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/integration-sendgrid-layer',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-sendgrid-layer'
};

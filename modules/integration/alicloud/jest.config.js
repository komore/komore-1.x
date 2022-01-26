module.exports = {
  testMatch: ['**/modules/integration/alicloud/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/integration-alicloud',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'integration-alicloud',
  testEnvironment: 'node'
};

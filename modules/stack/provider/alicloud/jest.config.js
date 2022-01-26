module.exports = {
  testMatch: ['**/modules/stack/provider/alicloud/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/stack-provider-alicloud',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-provider-alicloud',
  testEnvironment: 'node'
};

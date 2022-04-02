module.exports = {
  testMatch: ['**/modules/stack/alicloud/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/stack-alicloud',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-alicloud',
  testEnvironment: 'node'
};

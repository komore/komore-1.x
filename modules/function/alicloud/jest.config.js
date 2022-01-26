module.exports = {
  testMatch: ['**/modules/function/alicloud/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/function-alicloud',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'function-alicloud',
  testEnvironment: 'node'
};

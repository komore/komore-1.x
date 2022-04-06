module.exports = {
  testMatch: ['**/modules/stack/aws/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/stack-aws',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-aws',
  testEnvironment: 'node'
};

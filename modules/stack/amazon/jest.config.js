module.exports = {
  testMatch: ['**/modules/stack/amazon/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/stack-amazon',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'stack-amazon',
  testEnvironment: 'node'
};

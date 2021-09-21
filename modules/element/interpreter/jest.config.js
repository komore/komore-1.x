module.exports = {
  testMatch: ['**/modules/element/interpreter/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/element-interpreter',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-interpreter',
  testEnvironment: 'node'
};

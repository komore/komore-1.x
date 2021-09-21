module.exports = {
  testMatch: ['**/modules/element/ssg/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/element-ssg',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-ssg',
  testEnvironment: 'node'
};

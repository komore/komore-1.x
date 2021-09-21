module.exports = {
  testMatch: ['**/modules/element/ssg/markdown/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-ssg-markdown',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-ssg-markdown',
  testEnvironment: 'node'
};

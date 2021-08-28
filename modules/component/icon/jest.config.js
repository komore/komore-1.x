module.exports = {
  testMatch: ['**/modules/component/icon/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/component-icon',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'component-icon'
};

module.exports = {
  testMatch: ['**/modules/element/material/top-app-bar/src/**/*.spec.ts'],
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/element-material-topappbar',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-material-topappbar'
};

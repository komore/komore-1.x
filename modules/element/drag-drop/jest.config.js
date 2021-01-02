module.exports = {
  testMatch: ['**/modules/element/drag-drop/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/element-dragdrop',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-dragdrop'
};

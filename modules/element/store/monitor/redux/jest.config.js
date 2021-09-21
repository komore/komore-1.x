module.exports = {
  testMatch: ['**/modules/element/store/monitor/redux/src/**/*.spec.ts'],
  preset: '../../../../../jest.preset.js',
  coverageDirectory: '../../../../../coverage/element-store-monitor-redux',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'element-store-monitor-redux',
  testEnvironment: 'node'
};

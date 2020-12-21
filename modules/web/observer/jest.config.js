module.exports = {
  testMatch: ['**/modules/web/observer/src/**/*.spec.ts'],
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../coverage/web-observer',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-observer'
};

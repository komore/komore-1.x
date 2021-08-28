module.exports = {
  testMatch: ['**/modules/component/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/component',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'component'
};

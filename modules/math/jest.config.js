module.exports = {
  testMatch: ['**/modules/math/src/**/*.spec.ts'],
  preset: '../../jest.preset.js',
  coverageDirectory: '../../../coverage/math',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'math'
};

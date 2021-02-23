module.exports = {
  testMatch: ['**/modules/web/media/operators/src/**/*.spec.ts'],
  preset: '../../../..jest.preset.js',
  coverageDirectory: '../../../../coverage/web-media-operators',
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'web-media-operators'
};
